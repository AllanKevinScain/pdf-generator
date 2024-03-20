import { Request, Response } from "express";
import { prismaClientdb } from "../../database";

export class CreatePastoralController {
  async handle(
    request: Request<any, any, { name: string }>,
    response: Response
  ) {
    const body = request.body;

    const pastoral = await prismaClientdb.pastoral.create({ data: body });

    return response.json(pastoral);
  }
}
