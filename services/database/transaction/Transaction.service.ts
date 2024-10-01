import { Wallet_Service } from "../wallet/Wallet.service";
import { prismaClientSingleton } from "../db";

const prisma = prismaClientSingleton();
const wallet = new Wallet_Service();

export class Transaction_Service {
  async create(
    walletId: number,
    typeId: number,
    value: number,
    description: string
  ) {
    await wallet.exists(walletId);
    try {
      const res = await prisma.transaction.create({
        data: {
          walletId,
          value,
          description,
          typeId,
        },
      });
      if (typeId === 1) {
        await wallet.newIncome(walletId, value);
      } else if (typeId === 2) {
        await wallet.newIncome(walletId, value);
      }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async patch(
    id: number,
    value?: number,
    description?: string,
    typeId?: number
  ) {
    try {
      await this.exists(id);
      const transaction = await prisma.transaction.findUnique({
        where: { id },
      });
      const res = await prisma.transaction.update({
        where: {
          id,
        },
        data: {
          value,
          description,
          typeId,
        },
      });
      if (transaction?.typeId === 1) {
        await wallet.newOutcome(
          transaction.walletId,
          Number(transaction.value)
        );
      } else if (transaction?.typeId === 2) {
        await wallet.newIncome(transaction.walletId, Number(transaction.value));
      }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async getOne(id: number) {
    try {
      const res = await prisma.transaction.findUnique({
        where: {
          id,
        },
      });
      return res;
    } catch (error) {
      throw error;
    }
  }

  async getMany(walletId: number, take: number, skip: number) {
    await wallet.exists(walletId);
    try {
      const res = await prisma.transaction.findMany({
        where: {
          walletId,
        },
        take,
        skip,
      });
      return res;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number) {
    try {
      await this.exists(id);
      const transaction = await prisma.transaction.findUnique({
        where: {
          id,
        },
      });
      const res = await prisma.transaction.delete({
        where: {
          id,
        },
      });

      if (transaction?.typeId === 1) {
        await wallet.newOutcome(
          transaction.walletId,
          Number(transaction.value)
        );
      } else if (transaction?.typeId === 2) {
        await wallet.newIncome(transaction.walletId, Number(transaction.value));
      }

      return res;
    } catch (error) {
      throw error;
    }
  }

  async exists(id: number) {
    const res = await prisma.transaction.findUnique({
      where: {
        id,
      },
    });
    if (!res) {
      throw new Error("Transação não encontrada!");
    } else {
      return;
    }
  }
}
