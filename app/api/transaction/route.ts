import { Transaction_Service } from "@/services/database/transaction/Transaction.service";
import { NextRequest } from "next/server";

const transaction_service = new Transaction_Service();

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const walletId = searchParams.get("walletId");
    const skip = searchParams.get("skip");
    const take = searchParams.get("take");
    if (!walletId || !skip || !take) {
      return Response.json({
        status: 400,
        message: "Dados incompletos!",
      });
    }
    const res = await transaction_service.getMany(
      Number(walletId),
      Number(take),
      Number(skip)
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
export async function PATCH(request: Request) {
  try {
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
export async function POST(request: Request) {
  try {
    const { walletId, typeId, value, description } = await request.json();
    if (
      !walletId ||
      !typeId ||
      !value ||
      !description ||
      description.length < 1
    ) {
      return Response.json({
        status: 400,
        message: "Dados incompletos!",
      });
    }
    const res = await transaction_service.create(
      walletId,
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
