import { Wallet_Service } from "@/services/database/wallet/Wallet.service";
import { NextRequest } from "next/server";

const wallet_service = new Wallet_Service();

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");
    if (!id) {
      throw new Error("Id do usuario faltando!");
    }
    const res = await wallet_service.findByUserId(Number(id));
    return Response.json({
      status: 200,
      res,
    });
  } catch (error) {
    return Response.json({
      status: 500,
      message: "Erro não tratado",
      error,
    });
  }
}
