"use client";

import Button from "@/components/shared/Button";
import React from "react";
import { Tool_Panel_Store } from "../tool_panel/Tool_Panel.store";

export default function Controles() {
  const { session } = Tool_Panel_Store();
  return (
    <div className="flex flex-row gap-3 basis-24 items-center justify-center w-5/6 mb-5">
      {session === "form_transaction" ? (
        <>
          <Button color="red" text="Deletar" icon="deletar" />
          <Button color="green" text="Salvar" icon="salvar" />
        </>
      ) : (
        <>
          <Button color="red" text="Saída" icon="saida" />
          <Button color="blue" text="Filtro" icon="filtro" />
          <Button color="green" text="Entrada" icon="entrada" />
        </>
      )}
    </div>
  );
}
