import { CreateTransaction } from "@/services/database/transaction/Transaction";
import { gerfin_api } from "../gerfin_api";
import { Transaction } from "@prisma/client";
import { DateValueType } from "react-tailwindcss-datepicker";

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
      const res = await gerfin_api.get(
        `/transaction?walletid=${walletId}&take=${take}&skip=${skip}`
      );
      return res.data.data;
    } catch (error) {
      throw error;
    }
  }
  async filterByDate(
    date: DateValueType,
    walletId: number,
    take: number,
    skip: number
  ) {
    try {
      if (!date?.endDate || !date.startDate) {
        throw new Error("dados inválidos!");
      }
      const datainicio = date.startDate.toISOString();
      const datafim = date.endDate.toISOString();
      const res = await gerfin_api.get(
        `/transaction/filter/date?datainicio=${datainicio}&datafim=${datafim}&walletid=${walletId}&take=${take}&skip${skip}`
      );
      console.log({ datainicio, datafim, res: res });
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  async create(transaction: CreateTransaction) {
    try {
      const res = await gerfin_api.post(`/transaction`, {
        walletId: transaction.walletId,
        date: transaction.date,
        typeId: transaction.typeId,
        value: transaction.value,
        description: transaction.description,
      });
      console.log(transaction);
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
