"use client";

import React from "react";
import Container from "../shared/Container";
import Form_Container from "../shared/Form_Container";
import Title from "../shared/Title";
import Input from "../shared/Input";
import Button from "../shared/Button";

export default function Signup() {
  return (
    <Container>
      <Form_Container>
        <Title text="Cadastre-se" />
        <div className="flex flex-col gap-4 landscape:w-3/5 portrait:w-5/6 focus:bg-none active:bg-none">
          <Input placeholder={"Digite seu nome completo"} onChange={() => {}} />
          <Input
            type="email"
            placeholder={"Digite seu e-mail"}
            onChange={() => {}}
          />
          <Input
            type="password"
            placeholder={"Digite sua senha"}
            onChange={() => {}}
          />
          <Input
            type="password"
            placeholder={"Confirme sua senha"}
            onChange={() => {}}
          />
          <div className="h-2"></div>
          <Button color="blue" text="Cadastrar-se" />
        </div>
      </Form_Container>
    </Container>
  );
}
