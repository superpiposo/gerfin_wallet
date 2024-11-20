"use client";

import Button from "@/components/shared/Button";
import React from "react";
import { Tool_Panel_Store } from "../tool_panel/Tool_Panel.store";
import { Controles_Service } from "./Controles.service";

const controles_service = new Controles_Service();

export default function Controles() {
  const { session } = Tool_Panel_Store();
  return (
    <div className="flex flex-row gap-3 basis-24 items-center justify-center w-5/6 mb-5">
      {session === "form_transaction" ? (
        <>
          <Button
            color="red"
            text="Cancelar"
            icon="cancelar"
            onClick={() => {
              controles_service.cancel_transaction();
            }}
          />
          <Button
            color="green"
            text="Salvar"
            icon="salvar"
            onClick={() => {
              controles_service.create_transaction();
            }}
          />
        </>
      ) : session === "filter" ? (
        <>
          <Button
            color="red"
            text="Cancelar"
            icon="cancelar"
            onClick={() => {
              controles_service.change_tool_panel_insights();
            }}
          />
          <Button
            color="green"
            text="Salvar"
            icon="salvar"
            onClick={() => {}}
          />
        </>
      ) : (
        <>
          <Button
            color="red"
            text="Saída"
            icon="saida"
            onClick={() => {
              controles_service.change_tool_panel_form_transaction(2);
            }}
          />
          {/* <Button color="blue" text="Filtro" icon="filtro" /> */}
          <Button
            color="green"
            text="Entrada"
            icon="entrada"
            onClick={() => {
              controles_service.change_tool_panel_form_transaction(1);
            }}
          />
        </>
      )}
    </div>
  );
}
