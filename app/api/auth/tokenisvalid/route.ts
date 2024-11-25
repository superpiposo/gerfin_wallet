import { Auth_Service } from "@/services/database/auth/Auth.service";

const auth_service = new Auth_Service();

export async function POST(request: Request) {
  try {
    const { token } = await request.json();
    if (!token) {
      return Response.json({ status: 400, message: "Token não encontrado!" });
    } else {
      const res = auth_service.verifyToken(token);
      return Response.json({ status: 200, data: res });
    }
  } catch (error) {
    return Response.json({
      status: 500,
      message: "Erro não tratado",
      erro: error,
    });
  }
}
