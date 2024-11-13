import { gerfin_api } from "../gerfin_api";

export class Client_Auth_Service {
  async login(email: string, senha: string) {
    try {
      const res = await gerfin_api.post("/auth/login", {
        email,
        senha,
      });
      return res;
    } catch (error) {
      throw error;
    }
  }
}
