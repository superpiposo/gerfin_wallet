import { gerfin_api } from "../gerfin_api";
export class Client_Wallet_Service {
  async getOne(id: number) {
    try {
      const res = await gerfin_api.get(`/wallet?id=${id}`);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
}
