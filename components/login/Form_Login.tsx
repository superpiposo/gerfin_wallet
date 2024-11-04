"use client";
import React from "react";
import Input from "../shared/Input";
import Container from "../shared/Container";
import Title from "../shared/Title";
import Button from "../shared/Button";
import { useRouter } from "next/navigation";
import Form_Container from "../shared/Form_Container";

export default function Form_Login() {
  const router = useRouter();
  return (
    <Container>
      <Form_Container>
        <Title text="Acesse sua <br /> carteira" />
        <div className="h-2"></div>
        <div className="flex flex-col gap-4 landscape:w-3/5 portrait:w-5/6">
          <Input
            onChange={(e) => {
              console.log(e);
            }}
            placeholder="Digite seu email..."
            value=""
          />
          <Input
            onChange={(e) => {
              console.log(e);
            }}
            placeholder="Digite a sua senha..."
            value=""
          />
        </div>
        <div className="h-2"></div>
        <div className="landscape:w-3/5 portrait:w-5/6 justify-center flex flex-row gap-2">
          <Button color="green" text="Acessar" onClick={() => {}} />
          <Button
            color="blue"
            text="Cadastrar"
            onClick={() => {
              router.push("/signup");
            }}
          />
        </div>
      </Form_Container>
    </Container>
  );
}
