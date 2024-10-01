import { PrismaClient } from "@prisma/client";
import { users, transactionTypes } from "./dataSeed";

const prisma = new PrismaClient();

async function main() {
  for (const user of users) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: {
        id: user.id,
        nome: user.nome,
        email: user.email,
        senha: user.senha,
        wallet: {
          create: {
            value: user.wallet.value,
          },
        },
      },
    });
  }

  for (const transactionType of transactionTypes) {
    await prisma.transactionType.create({
      data: transactionType,
    });
  }
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
