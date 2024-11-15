import { Wallet_Service } from "../wallet/Wallet.service";
import { prismaClientSingleton } from "../db";
import { Transaction } from "./Transaction";

const prisma = prismaClientSingleton();

export class Transaction_Service {
  private wallet: Wallet_Service;
  constructor() {
    this.wallet = new Wallet_Service();
  }
  async create(
    walletId: number,
    date: string,
    typeId: number,
    value: number,
    description: string
  ) {
    try {
      const res = await prisma.transaction.create({
        data: {
          walletId,
          date: new Date(date),
          value,
          description,
          typeId,
        },
      });
      if (typeId === 1) {
        await this.wallet.newIncome(walletId, value);
      } else if (typeId === 2) {
        await this.wallet.newOutcome(walletId, value);
      }
      await this.wallet.insertInTotalTransactions(walletId);
      if (res.typeId === 1) {
        await this.wallet.insertInTotalIncomes(res);
      } else if (res.typeId === 2) {
        await this.wallet.insertInTotalOutcomes(res);
      }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async patch(id: number, data: Partial<Transaction>) {
    try {
      const transaction = await this.getOne(id);
      if (!transaction) {
        throw new Error("");
      }
      await this.wallet.removeTransactionScore(transaction);
      await this.wallet.removeTransactionValue(transaction);
      const res = await prisma.transaction.update({
        where: {
          id,
        },
        data,
      });

      if (transaction.value && transaction?.typeId === 1) {
        await this.wallet.newIncome(
          transaction.walletId,
          Number(data.value) || 0
        );
      } else if (transaction?.typeId === 2) {
        await this.wallet.newOutcome(
          transaction.walletId,
          Number(data.value) || 0
        );
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
    console.log(walletId);
    try {
      const res = await prisma.transaction.findMany({
        take,
        skip,
        where: {
          walletId: {
            equals: walletId,
          },
        },
      });
      return res;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number) {
    try {
      const transaction = await prisma.transaction.findFirst({
        where: {
          id,
        },
      });
      if (!transaction) {
        throw new Error("Transação não encontrada!");
      }
      const res = await prisma.transaction.delete({
        where: {
          id,
        },
      });
      await this.wallet.removeTransactionScore(transaction);
      await this.wallet.removeTransactionValue(transaction);
      await this.wallet.removeFromTotalTransactions(transaction.walletId);
      if (transaction.typeId === 1) {
        await this.wallet.removeFromTotalIncomes(transaction);
      } else if (transaction.typeId === 2) {
        await this.wallet.removeFromTotalOutcomes(transaction);
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
