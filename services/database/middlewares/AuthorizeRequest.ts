import { NextRequest } from "next/server";
import { Auth_Service } from "../auth/Auth.service";

const auth_service = new Auth_Service();

export async function AuthorizeRequest(request: NextRequest) {
  const headers = request.headers;
  const authorization = headers.get("authorization");
  const token = authorization?.split(" ")[1];
  console.log({ headers, authorization, token });
  if (!authorization || !token) {
    return Response.json({ status: 400, message: "Token não encontrado!" });
  }
  const decoded = auth_service.verifyToken(token);
  if (!decoded?.success) {
    return Response.json({ status: 401, message: "Token inválido!" });
  } else {
    return true;
  }
}
