import { User_Service } from "@/services/database/user/User.service";

const user_service = new User_Service();

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    const res = await user_service.findByEmail(email);

    return Response.json(res);
  } catch (error) {
    return Response.json({
      status: 500,
      message: "Erro não tratado!",
      error: error,
    });
  }
}
