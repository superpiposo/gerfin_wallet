import { Wallet } from "./wallet";
import { prismaClientSingleton } from "../db";
import { User_Service } from "../user/User.service";

const prisma = prismaClientSingleton();
const user_service = new User_Service();
const income_score = process.env.INCOME;
const outcome_score = process.env.OUTCOME;

export class Wallet_Service {
  async getOne(userId: number) {
    try {
      await user_service.exists(userId);
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
    await user_service.exists(userId);
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
      return value * Number(income_score);
    } else if (type === "outcome") {
      return value * Number(outcome_score);
    } else {
      throw new Error(
        "Tipo de transação não definida corretamente para o score!"
      );
    }
  }
}
