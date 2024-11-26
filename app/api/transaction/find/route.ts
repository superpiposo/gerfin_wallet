import { AuthorizeRequest } from "@/services/database/middlewares/AuthorizeRequest";
import { Transaction_Service } from "@/services/database/transaction/Transaction.service";
import { NextRequest } from "next/server";

const transaction_service = new Transaction_Service();

export async function GET(request: NextRequest) {
  try {
    const auth = await AuthorizeRequest(request);
    if (auth !== true) {
      return auth;
    }
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");

    if (!id) {
      return Response.json({
        status: 400,
        message: "Dados incompletos!",
      });
    }
    const res = await transaction_service.getOne(Number(id));
    return Response.json(res);
  } catch (error) {
    return Response.json({
      status: 500,
      message: "erro não tratado!",
      error,
    });
  }
}
