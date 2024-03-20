import { Response, Request } from "express";
import { prismaClientdb } from "../../database";

export class GetAllPastoralController {
  async handle(_: Request, response: Response) {
    const allPastorals = await prismaClientdb.pastoral.findMany();

    return response.json(allPastorals);
  }
}
