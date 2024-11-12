import { CreateTransaction } from "@/services/database/transaction/Transaction";
import { gerfin_api } from "../gerfin_api";
import { Transaction } from "@prisma/client";

export class Client_Transaction_Service {
  async getOne(id: number) {
    try {
      const res = await gerfin_api.get(`/transaction/find?id=${id}`);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  async getManny(walletId: number, take: number, skip: number) {
    try {
      const res = await gerfin_api.post(
        `transaction?walletId=${walletId}&take=${take}&skip=${skip}`
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  async create(transaction: CreateTransaction) {
    try {
      const res = await gerfin_api.post(`/transaction`, {
        walletId: transaction.walletId,
        typeId: transaction.walletId,
        value: transaction.value,
        description: transaction.description,
      });
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  async patch(transactionId: number, data: Partial<Transaction>) {
    try {
      const res = await gerfin_api.patch(`/transaction`, {
        transactionId,
        data,
      });
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  async delete(id: number) {
    try {
      const res = await gerfin_api.delete(`/transaction?id=${id}`);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
}
