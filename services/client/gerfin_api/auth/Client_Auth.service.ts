import { public_gerfin_api } from "../gerfin_api";

export class Client_Auth_Service {
  async login(email: string, senha: string) {
    try {
      const data = await public_gerfin_api.post("/auth/login", {
        email,
        senha,
      });
      return data;
    } catch (error) {
      throw error;
    }
  }
}
