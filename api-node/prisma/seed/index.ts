import { PrismaClient } from "@prisma/client";

import { notes } from "./fixtures/notes";

const prismaClient = new PrismaClient();

async function main() {
  await prismaClient.pastoral.create({ data: { name: "ECC" } });

  await prismaClient.note.createMany({
    data: notes,
  });
}

main()
  .then(async () => {
    await prismaClient.$disconnect();
  })
  .catch(async (error) => {
    await prismaClient.$disconnect();
    console.error(error);
    process.exit(1);
  });
