"use client";

import React from "react";
import Container from "../shared/Container";
import Form_Container from "../shared/Form_Container";
import Item from "./parts/item/Item";
import Controles from "./parts/controles/Controles";
import Tool_Panel from "./parts/tool_panel/Tool_Panel";

const transacoes = [
  {
    data: "2/11/2024 22:00h",
    tipo_transacao: "entrada",
    motivo: "salario",
    valor: 4400,
  },
  {
    data: "2/11/2024 22:01h",
    tipo_transacao: "saida",
    motivo: "aluguel",
    valor: 1700,
  },
  {
    data: "2/11/2024 22:02h",
    tipo_transacao: "entrada",
    motivo: "servicos",
    valor: 1500,
  },
  {
    data: "2/11/2024 22:03h",
    tipo_transacao: "saida",
    motivo: "mercado",
    valor: 1000,
  },
];

export default function Wallet() {
  return (
    <Container>
      <Form_Container>
        <div className="flex-grow w-5/6 pt-10">
          <div
            className="w-full h-full bg-white rounded-md
          flex flex-col"
          >
            {transacoes.map((transacao, index) => (
              <Item
                key={index}
                data={transacao.data}
                tipo_transacao={transacao.tipo_transacao}
                motivo={transacao.motivo}
                valor={transacao.valor}
              />
            ))}
            <div className="flex-grow"></div>
            <Tool_Panel />
          </div>
        </div>
        <Controles />
      </Form_Container>
    </Container>
  );
}
