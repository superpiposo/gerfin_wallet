"use client";

import React from "react";
import Container from "../shared/Container";
import Form_Container from "../shared/Form_Container";
import Item from "./parts/item/Item";
import Controles from "./parts/controles/Controles";
import Tool_Panel from "./parts/tool_panel/Tool_Panel";
import Toggle_Theme from "../shared/Toggle_Theme";
import Wallet_Provider from "../providers/wallet_provider/Wallet_Provider";
import Transaction_Provider from "../providers/transaction_provider/Transaction_Provider";

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
    <Wallet_Provider>
      <Transaction_Provider>
        <Container>
          <Toggle_Theme />
          <Form_Container>
            <div className="flex-grow w-5/6 pt-10">
              <div className="w-full h-full rounded-md border-stone-300 dark:border-stone-700 overflow-hidden relative">
                <div
                  className="w-full h-full bg-white dark:bg-stone-800 rounded-md border border-stone-300 
          flex flex-col overflow-y-scroll overflow-x-hidden gap-1 p-2 relative"
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
                </div>
                <Tool_Panel />
              </div>
            </div>
            <Controles />
          </Form_Container>
        </Container>
      </Transaction_Provider>
    </Wallet_Provider>
  );
}
