import { Wallet } from "./wallet";
import { prismaClientSingleton } from "../db";

const prisma = prismaClientSingleton();

export class Wallet_Service {
  async getOne(userId: number) {
    try {
      await this.exists(userId);
      const res = await prisma.wallet.findUnique({
        where: {
          userId,
        },
      });
      return res;
    } catch (error) {
      return error;
    }
  }

  async patch(userId: number, data: Partial<Wallet>) {
    try {
      const res = await prisma.wallet.update({
        where: {
          userId,
        },
        data: data,
      });

      return res;
    } catch (error) {
      return error;
    }
  }

  async newIncome(id: number, income: number) {
    try {
      const wallet = await prisma.wallet.findUnique({
        where: {
          id,
        },
      });
      const res = await prisma.wallet.update({
        where: {
          id,
        },
        data: {
          value: Number(wallet?.value) + income,
        },
      });
      return res;
    } catch (error) {
      throw error;
    }
  }

  async newOutcome(id: number, outcome: number) {
    try {
      const wallet = await prisma.wallet.findUnique({
        where: {
          id,
        },
      });
      const res = await prisma.wallet.update({
        where: {
          id,
        },
        data: {
          value: Number(wallet?.value) - outcome,
        },
      });
      return res;
    } catch (error) {
      throw error;
    }
  }

  async exists(id: number) {
    const res = await prisma.wallet.findUnique({
      where: {
        id,
      },
    });
    if (!res) {
      throw new Error("Carteira não encontrada!");
    } else {
      return;
    }
  }
}
