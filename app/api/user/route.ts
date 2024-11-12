import { User_Service } from "@/services/database/user/User.service";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { NextRequest } from "next/server";
const user_service = new User_Service();
export async function POST(request: Request) {
  try {
    const { nome, email, senha } = await request.json();
    const res = await user_service.create({ nome, email, senha });
    return Response.json(res);
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return Response.json({
          status: 201,
          message: "E-mail já cadastrado!",
          error,
        });
      }
    }
    return Response.json({
      status: 500,
      message: "Um erro não tratado ocorreu!",
      error: error,
    });
  }
}

export async function GET() {
  try {
    const res = await user_service.getAll();
    return Response.json(res);
  } catch (error) {
    console.log(error);
    return Response.json({
      status: 500,
      message: "Erro desconhecido",
      error,
    });
  }
}

export async function PATCH(request: Request) {
  try {
    const { email, data } = await request.json();
    if (!email || !data) {
      return Response.json({ status: 201, message: "dados faltando" });
    }
    const res = await user_service.patch(email, data);
    return Response.json(res);
  } catch (error) {
    return Response.json({
      status: 500,
      message: "Erro não tratado!",
      error: error,
    });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");
    if (!id) {
      throw new Error("Usuario não encotnrado");
    }
    const res = await user_service.delete(Number(id));
    return Response.json(res);
  } catch (error) {
    return Response.json({ status: 500, message: "erro não tratado", error });
  }
}
