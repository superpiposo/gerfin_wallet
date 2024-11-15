import { Wallet } from "./wallet";
import { prismaClientSingleton } from "../db";
import { Transaction } from "@prisma/client";

const prisma = prismaClientSingleton();

export class Wallet_Service {
  private income_score: number;
  private outcome_score: number;
  constructor() {
    this.income_score = 0.05;
    this.outcome_score = 0.065;
  }
  async getOne(id: number) {
    try {
      const res = await prisma.wallet.findUnique({
        where: {
          id,
        },
      });
      return res;
    } catch (error) {
      throw error;
    }
  }
  async findByUserId(userId: number) {
    try {
      const res = await prisma.wallet.findFirst({
        where: {
          userId,
        },
      });
      return res;
    } catch (error) {
      throw error;
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
      const wallet = await this.exists(id);
      const xp = this.calc_score_update(income, "income");
      const res = await prisma.wallet.update({
        where: {
          id,
        },
        data: {
          value: Number(wallet?.value) + income,
          score: Number(wallet.score) + xp,
        },
      });
      return res;
    } catch (error) {
      throw error;
    }
  }

  async removeTransactionScore(transaction: Transaction) {
    try {
      const wallet = await prisma.wallet.findUnique({
        where: { id: transaction.walletId },
      });

      if (!wallet) {
        throw new Error("Transação não existente");
      }

      if (transaction.typeId === 1) {
        const inserted = Number(transaction.value) * this.income_score;
        const res = await this.patch(wallet?.id, {
          score: Number(wallet?.score - inserted),
        });
        return res;
      }
      if (transaction.typeId === 2) {
        const inserted = Number(transaction.value) * this.outcome_score;
        const res = await this.patch(wallet.userId, {
          score: Number(wallet.score + inserted),
        });
        return res;
      }
    } catch (error) {
      throw error;
    }
  }

  async removeTransactionValue(transaction: Transaction) {
    try {
      const wallet = await prisma.wallet.findUnique({
        where: { id: transaction.walletId },
      });
      if (!wallet) {
        throw new Error("Transação não existente");
      }
      if (transaction.typeId === 1) {
        const res = await this.patch(wallet.userId, {
          value: Number(wallet.value) - Number(transaction.value),
        });
        return res;
      }
      if (transaction.typeId === 2) {
        const res = await this.patch(wallet.userId, {
          value: Number(wallet.value) + Number(transaction.value),
        });
        return res;
      }
    } catch (error) {
      throw error;
    }
  }

  async newOutcome(id: number, outcome: number) {
    try {
      const wallet = await this.exists(id);
      const xp = this.calc_score_update(outcome, "outcome");
      const res = await prisma.wallet.update({
        where: {
          id,
        },
        data: {
          value: Number(wallet?.value) - outcome,
          score: Number(wallet.score) - xp,
        },
      });
      return res;
    } catch (error) {
      throw error;
    }
  }

  async insertInTotalTransactions(id: number) {
    try {
      const wallet = await this.exists(id);
      const res = await prisma.wallet.update({
        where: {
          id,
        },
        data: {
          total_transactions: wallet.total_transactions + 1,
        },
      });
      return res;
    } catch (error) {
      throw error;
    }
  }
  async removeFromTotalTransactions(id: number) {
    try {
      const wallet = await this.exists(id);
      const res = await prisma.wallet.update({
        where: {
          id,
        },
        data: {
          total_transactions: wallet.total_transactions - 1,
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
      return res;
    }
  }

  calc_score_update(value: number, type: string) {
    if (type === "income") {
      return value * Number(this.income_score);
    } else if (type === "outcome") {
      return value * Number(this.outcome_score);
    } else {
      throw new Error(
        "Tipo de transação não definida corretamente para o score!"
      );
    }
  }
}
