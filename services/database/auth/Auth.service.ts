import { User } from "@prisma/client";
import { User_Service } from "../user/User.service";
import jwt from "jsonwebtoken";

const hash = process.env.HASH;

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
      const token = this.signToken(res);
      return { user: res, token };
    } catch (error) {
      throw error;
    }
  }
  signToken(user: User) {
    try {
      if (!hash) {
        throw new Error("Erro com a hash da aplicação");
      }
      const token = jwt.sign({ nome: user.nome, email: user.email }, hash, {
        algorithm: "HS256",
        expiresIn: "1h",
      });
      return token;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  verifyToken(token: string) {
    try {
      if (!hash) {
        throw new Error("Erro com a hash da aplicação");
      }
      const decoded = jwt.verify(token, hash);
      if (decoded) {
        return { success: true, message: "Autorizado!" };
      }
    } catch (error) {
      if (error instanceof jwt.JsonWebTokenError) {
        return { success: false, message: "Token expirado" };
      } else if (error instanceof jwt.TokenExpiredError) {
        return { success: false, message: "Token inválido" };
      } else {
        return { success: false, message: "Erro interno do servidor!" };
      }
    }
  }
}
