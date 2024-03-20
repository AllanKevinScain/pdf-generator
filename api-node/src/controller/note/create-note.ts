import { Response } from "express";
import { CreateNodeRequestInterface } from "../../types";
import { prismaClientdb } from "../../database";
import { noteSchema } from "../../schemas";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { r2 } from "../../lib";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { env } from "../../env";
import { randomUUID } from "node:crypto";

export class CreateNoteController {
  async handle(request: CreateNodeRequestInterface, response: Response) {
    const body = request.body;

    const parse = noteSchema.safeParse(body);

    if (parse.success) {
      const { herContentType, hisContentType, ...rest } = body;
      const hisFileKey = randomUUID();
      const herFileKey = randomUUID();

      await prismaClientdb.note.create({
        data: { ...rest, herPhotoKey: herFileKey, hisPhotoKey: hisFileKey },
      });

      if (hisContentType && herContentType) {
        const hisSignedUrl = await getSignedUrl(
          r2,
          new PutObjectCommand({
            Bucket: env.R2_BUCKET_NAME,
            Key: hisFileKey,
            ContentType: hisContentType || "png",
          }),
          { expiresIn: 600 }
        );
        const herSignedUrl = await getSignedUrl(
          r2,
          new PutObjectCommand({
            Bucket: env.R2_BUCKET_NAME,
            Key: herFileKey,
            ContentType: herContentType || "png",
          }),
          { expiresIn: 600 }
        );

        return response.json({
          success: true,
          imageUploadURL: { his: hisSignedUrl, her: herSignedUrl },
        });
      }

      return response.json({
        success: true,
      });
    }

    return response.status(502).send({
      success: false,
    });
  }
}
