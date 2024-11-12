import { User } from "@prisma/client";
import { gerfin_api } from "../gerfin_api";
export class Client_User_Service {
  async create(nome: string, email: string, senha: string) {
    try {
      const res = await gerfin_api.post("/user", { nome, email, senha });
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  async getMany() {
    try {
      const res = await gerfin_api.get("/user");
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  async find(email: string) {
    try {
      const res = await gerfin_api.post("/user/find", { email });
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  async patch(email: string, data: Partial<User>) {
    try {
      const res = await gerfin_api.patch("/user", { email, data });
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  async delete(id: number) {
    try {
      const res = await gerfin_api.delete(`/user?id=${id}`);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
}
