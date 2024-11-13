import { User_Service } from "../user/User.service";

const user_service = new User_Service();
export class Auth_Service {
  async login(email: string, senha: string) {
    try {
      const res = await user_service.findByEmail(email);
      if (!res) {
        throw new Error("USuario não existe!");
      }
      if (res.senha !== senha) {
        throw new Error("Usuario ou senha incorretos");
      }
      return res;
    } catch (error) {
      throw error;
    }
  }
}
