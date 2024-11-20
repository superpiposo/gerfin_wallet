"use client";

import React from "react";
import { Tool_Panel_Store } from "../tool_panel/Tool_Panel.store";
import { Controles_Service } from "./Controles.service";
import Button_Extended from "@/components/shared/Button_Extended";

const controles_service = new Controles_Service();

export default function Controles() {
  const { session } = Tool_Panel_Store();
  return (
    <div className="flex flex-row gap-3 basis-24 items-center justify-center w-5/6 mb-5">
      {session === "form_transaction" ? (
        <>
          <Button_Extended
            color="red"
            text="Cancelar"
            icon="cancelar"
            size="medium"
            onClick={() => {
              controles_service.cancel_transaction();
            }}
          />
          <Button_Extended
            color="green"
            text="Salvar"
            icon="salvar"
            size="medium"
            onClick={() => {
              controles_service.create_transaction();
            }}
          />
        </>
      ) : session === "filter" ? (
        <>
          <Button_Extended
            color="red"
            text="Cancelar"
            icon="cancelar"
            size="medium"
            onClick={() => {
              controles_service.change_tool_panel_insights();
            }}
          />
          <Button_Extended
            color="green"
            text="Salvar"
            size="medium"
            icon="salvar"
            onClick={() => {}}
          />
        </>
      ) : (
        <>
          <Button_Extended
            onClick={() => {
              controles_service.change_tool_panel_form_transaction(2);
            }}
            color="red"
            icon="mais"
            size="medium"
            text="Saída"
          />
          <Button_Extended
            onClick={() => {
              controles_service.change_tool_panel_form_transaction(1);
            }}
            color="green"
            icon="mais"
            size="medium"
            text="Entrada"
          />
        </>
      )}
    </div>
  );
}
