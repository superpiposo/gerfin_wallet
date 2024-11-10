"use client";
import React from "react";
import Input from "../shared/Input";
import Container from "../shared/Container";
import Title from "../shared/Title";
import Button from "../shared/Button";
import { useRouter } from "next/navigation";
import Form_Container from "../shared/Form_Container";
import Toggle_Theme from "../shared/Toggle_Theme";
import { Login_Store } from "./Login.store";
import { Login_Service } from "./Login.service";

const login_service = new Login_Service();

export default function Form_Login() {
  const { email, password } = Login_Store();
  const router = useRouter();
  return (
    <Container>
      <Toggle_Theme />
      <Form_Container>
        <Title text="Acesse sua carteira" />
        <div className="h-2"></div>
        <div className="flex flex-col gap-4 landscape:w-3/5 portrait:w-5/6">
          <Input
            onChange={(e) => {
              login_service.change_user_email(e);
            }}
            placeholder="Digite seu email..."
            value={email}
          />
          <Input
            onChange={(e) => {
              login_service.change_user_password(e);
            }}
            placeholder="Digite a sua senha..."
            value={password}
          />
        </div>
        <div className="h-2"></div>
        <div className="landscape:w-3/5 portrait:w-5/6 justify-center flex flex-row gap-2">
          <Button
            color="green"
            text="Acessar"
            onClick={() => {
              login_service.login();
            }}
          />
          <Button
            color="blue"
            text="Cadastrar"
            onClick={() => {
              router.push("/signup");
            }}
          />
        </div>
        <Button
          color="blue"
          text="Esqueci minha senha"
          onClick={() => {
            router.push("/signup");
          }}
        />
      </Form_Container>
    </Container>
  );
}
