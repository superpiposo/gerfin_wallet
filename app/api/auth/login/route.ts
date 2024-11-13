import { Auth_Service } from "@/services/database/auth/Auth.service";

const auth_service = new Auth_Service();
export async function POST(request: Request) {
  try {
    const { email, senha } = await request.json();
    if (!email || !senha) {
      return Response.json({ status: 400, message: "Dados inválidos" });
    }
    const res = await auth_service.login(email, senha);
    if (res.email) {
      return Response.json({ status: 200, res });
    }
  } catch (error) {
    return Response.json({ status: 500, message: "Erro não tratado", error });
  }
}
