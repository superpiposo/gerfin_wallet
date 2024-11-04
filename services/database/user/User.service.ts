import { CreateUser, User } from "./User";
import { prismaClientSingleton } from "../db";

const prisma = prismaClientSingleton();

export class User_Service {
  async create(user: CreateUser) {
    try {
      await this.isSigned(user.email);
      const res = await prisma.user.create({
        data: {
          nome: user.nome,
          email: user.email,
          senha: user.senha,
          wallet: {
            create: {
              value: 0,
            },
          },
        },
      });

      return res;
    } catch (error) {
      return error;
    }
  }
  async getOne(id: number) {
    try {
      await this.exists(id);
      const res = await prisma.user.findUnique({
        where: {
          id,
        },
      });
      return res;
    } catch (error) {
      throw error;
    }
  }
  async findById(email: string) {
    try {
      const res = await prisma.user.findUnique({
        where: {
          email,
        },
      });
      if (!res) {
        throw new Error("Email não cadastrado!");
      } else {
        return res;
      }
    } catch (error) {
      throw error;
    }
  }
  async patch(id: number, data: Partial<User>) {
    try {
      await this.exists(id);
      const res = await prisma.user.update({
        where: {
          id,
        },
        data: data,
      });
      return res;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number) {
    try {
      await this.exists(id);
      const res = await prisma.user.delete({
        where: {
          id,
        },
        include: {
          wallet: {
            where: {
              userId: id,
            },
          },
        },
      });
      return res;
    } catch (error) {
      throw error;
    }
  }

  async exists(id: number) {
    const res = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    if (!res) {
      throw new Error("Usuario não existe!");
    } else {
      return;
    }
  }

  async isSigned(email: string) {
    const res = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!res) {
      throw new Error("Usuario já cadastrado!");
    } else {
      return;
    }
  }
}
