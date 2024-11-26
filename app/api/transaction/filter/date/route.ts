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
    const dataInicio = searchParams.get("datainicio");
    const dataFim = searchParams.get("datafim");
    const walletId = searchParams.get("walletid");
    const take = searchParams.get("take");
    const skip = searchParams.get("skip");
    if (!dataInicio || !dataFim || !walletId) {
      return Response.json({
        status: 400,
        message: "Dados incompletos!",
      });
    } else {
      const data_inicio = new Date(dataInicio);
      const data_fim = new Date(dataFim);
      const res = await transaction_service.filterByDate(
        {
          startDate: data_inicio,
          endDate: data_fim,
        },
        Number(walletId),
        Number(take),
        Number(skip)
      );
      return Response.json(res);
    }
  } catch (error) {
    return Response.json({
      status: 500,
      message: "Erro não tratado",
      error,
    });
  }
}
