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
    const walletid = searchParams.get("walletid");
    const skip = searchParams.get("skip");
    const take = searchParams.get("take");
    if (!walletid || !skip || !take) {
      return Response.json({
        status: 400,
        message: "Dados incompletos!",
      });
    }
    const data = await transaction_service.getMany(
      Number(walletid),
      Number(take),
      Number(skip)
    );
    if (data.length < 1) {
      return Response.json({ status: 200, data: [] });
    }
    return Response.json({
      status: 200,
      data,
    });
  } catch (error) {
    return Response.json({
      status: 500,
      message: "erro não tratado!",
      error,
    });
  }
}
export async function PATCH(request: NextRequest) {
  try {
    const auth = await AuthorizeRequest(request);
    if (auth !== true) {
      return auth;
    }
    const { transactionId, data } = await request.json();
    if (!transactionId || !data) {
      return Response.json({
        status: 400,
        message: "Dados incompletos!",
      });
    }
    const res = await transaction_service.patch(Number(transactionId), data);
    return Response.json(res);
  } catch (error) {
    return Response.json({
      status: 500,
      message: "erro não tratado!",
      error,
    });
  }
}
export async function POST(request: NextRequest) {
  try {
    const auth = await AuthorizeRequest(request);
    if (auth !== true) {
      return auth;
    }
    const { walletId, typeId, value, description, date } = await request.json();
    if (
      !walletId ||
      !typeId ||
      !value ||
      !description ||
      description.length < 1 ||
      !date
    ) {
      return Response.json({
        status: 400,
        message: "Dados incompletos!",
      });
    }
    const res = await transaction_service.create(
      walletId,
      date,
      typeId,
      value,
      description
    );
    return Response.json(res);
  } catch (error) {
    return Response.json({
      status: 500,
      message: "erro não tratado!",
      error,
    });
  }
}

export async function DELETE(request: NextRequest) {
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
    const res = await transaction_service.delete(Number(id));
    return Response.json(res);
  } catch (error) {
    return Response.json({
      status: 500,
      message: "erro não tratado!",
      error,
    });
  }
}
