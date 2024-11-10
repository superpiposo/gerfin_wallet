"use client";

import React from "react";
import Container from "../shared/Container";
import Form_Container from "../shared/Form_Container";
import Title from "../shared/Title";
import Input from "../shared/Input";
import Button from "../shared/Button";
import { Signup_Service } from "./Signup.service";
import { Signup_Store } from "./Signup.store";
import Toggle_Theme from "../shared/Toggle_Theme";

const signup_service = new Signup_Service();

export default function Signup() {
  const { name, email, password, re_password } = Signup_Store();
  return (
    <Container>
      <Toggle_Theme />
      <Form_Container>
        <Title text="Cadastre-se" />
        <div className="flex flex-col gap-4 landscape:w-3/5 portrait:w-5/6 focus:bg-none active:bg-none">
          <Input
            placeholder={"Digite seu nome completo"}
            onChange={(e) => {
              signup_service.change_name(e);
            }}
            value={name}
          />
          <Input
            type="email"
            placeholder={"Digite seu e-mail"}
            onChange={(e) => {
              signup_service.change_email(e);
            }}
            value={email}
          />
          <Input
            type="password"
            placeholder={"Digite sua senha"}
            onChange={(e) => {
              signup_service.change_passowrd(e);
            }}
            value={password}
          />
          <Input
            type="password"
            placeholder={"Confirme sua senha"}
            onChange={(e) => {
              signup_service.change_re_passowrd(e);
            }}
            value={re_password}
          />
          <div className="h-2"></div>
          <Button
            color="blue"
            text="Cadastrar-se"
            onClick={() => {
              signup_service.signup();
            }}
          />
        </div>
      </Form_Container>
    </Container>
  );
}
