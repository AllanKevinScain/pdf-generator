import { Response } from "express";
import { prismaClientdb } from "../../database";
import { DeleteNodeRequestInterface } from "../../types";
import { idNoteSchema } from "../../schemas";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { r2 } from "../../lib";
import { env } from "../../env";
export class DeleteNoteController {
  async handle(request: DeleteNodeRequestInterface, response: Response) {
    const { query } = request;

    const parseId = idNoteSchema.safeParse(query);

    if (parseId.success) {
      const { id } = query;
      const note = await prismaClientdb.note.findUnique({ where: { id } });

      if (note?.herPhotoKey && note.hisPhotoKey) {
        await r2.send(
          new DeleteObjectCommand({
            Bucket: env.R2_BUCKET_NAME,
            Key: note?.herPhotoKey,
          })
        );
        await r2.send(
          new DeleteObjectCommand({
            Bucket: env.R2_BUCKET_NAME,
            Key: note.hisPhotoKey,
          })
        );
      }
      await prismaClientdb.note.delete({ where: { id } });

      return response.json({
        success: true,
      });
    }

    return response.status(502).send({
      success: false,
    });
  }
}
