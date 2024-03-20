import { Response, Request } from "express";
import { prismaClientdb } from "../../database";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { r2 } from "../../lib";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { env } from "../../env";

export class GetAllNoteController {
  async handle(_: Request, response: Response) {
    const allNotes = await prismaClientdb.note.findMany({
      orderBy: [
        {
          created_at: "desc",
        },
      ],
    });

    const responseAllNotes = await Promise.all(
      allNotes.map(async (note) => {
        const { hisPhotoKey, herPhotoKey } = note;

        if (hisPhotoKey && herPhotoKey) {
          const hisSignedUrl = await getSignedUrl(
            r2,
            new GetObjectCommand({
              Bucket: env.R2_BUCKET_NAME,
              Key: `${hisPhotoKey}`,
            }),
            { expiresIn: 600 }
          );
          const herSignedUrl = await getSignedUrl(
            r2,
            new GetObjectCommand({
              Bucket: env.R2_BUCKET_NAME,
              Key: `${herPhotoKey}`,
            }),
            { expiresIn: 600 }
          );

          return {
            ...note,
            images: { her: herSignedUrl, his: hisSignedUrl },
          };
        }
        return {
          ...note,
          images: { her: "", his: "" },
        };
      })
    );

    return response.json(responseAllNotes);
  }
}
