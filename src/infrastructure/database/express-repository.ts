import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const tableNames = ["Players", "Games", "PlayerGame", "Moves"];

async function main() {
  for (const tableName of tableNames)
    await prisma.$queryRawUnsafe(
      `Truncate "${tableName}" restart identity cascade;`
    );
  // ... you will write your Prisma Client queries here
  let includePost: boolean = false;
  let players: Prisma.PlayersCreateInput;

  // const createPlayer = await prisma.players.create(data)
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
