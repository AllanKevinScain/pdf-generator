import { Response } from "express";
import { prismaClientdb } from "../../database";
import { EditNodeRequestInterface } from "../../types";
import { idNoteSchema, noteSchema } from "../../schemas";

export class EditNoteController {
  async handle(request: EditNodeRequestInterface, response: Response) {
    const { body, query } = request;
    const { id } = query;

    const parseId = idNoteSchema.safeParse(query);
    if (parseId.success) {
      const parse = noteSchema.safeParse(body);

      if (parse.success) {
        await prismaClientdb.note.update({
          where: {
            id,
          },
          data: body,
        });

        return response.json({
          success: true,
        });
      }

      return response.status(502).send({
        success: false,
      });
    }

    return response.status(502).send({
      success: false,
    });
  }
}
