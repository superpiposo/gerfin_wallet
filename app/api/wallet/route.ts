import { Wallet_Service } from "@/services/database/wallet/Wallet.service";
import { NextRequest } from "next/server";

const wallet_service = new Wallet_Service();

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");
    if (!id) {
      return Response.json({
        status: 400,
        message: "Dados incompletos!",
      });
    }
    const res = await wallet_service.getOne(Number(id));
    return Response.json(res);
  } catch (error) {
    return Response.json({
      status: 500,
      message: "erro não tratado!",
      error,
    });
  }
}
