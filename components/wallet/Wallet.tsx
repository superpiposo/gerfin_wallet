"use client";

import React from "react";
import Container from "../shared/Container";
import Form_Container from "../shared/Form_Container";
import Item from "./parts/item/Item";
import Controles from "./parts/controles/Controles";
import Tool_Panel from "./parts/tool_panel/Tool_Panel";
import { Transaction_Store } from "@/global_stores/Transaction.store";
import { Wallet_Service } from "./Wallet.service";
import Providers from "../providers/Providers";
import Navbar from "./parts/navbar/Navbar";

const wallet_service = new Wallet_Service();

export default function Wallet() {
  const { transactions } = Transaction_Store();
  return (
    <Providers>
      <Container>
        <Navbar />
        <Form_Container>
          <div className="flex-grow w-5/6 pt-10">
            <div className="w-full h-full flex flex-col rounded-md border-stone-300 dark:border-stone-700 overflow-hidden relative">
              <div
                className="w-full flex-grow bg-white dark:bg-stone-700 rounded-md border border-stone-300 
          flex flex-col gap-2 relative overflow-hidden"
              >
                <div className="flex flex-col gap-2 overflow-y-scroll basis-5/6 py-3">
                  {transactions && transactions.length > 0 ? (
                    transactions.map((transacao, index) => (
                      <Item
                        key={index}
                        onClick={() => {
                          wallet_service.delete_transaction(transacao.id);
                        }}
                        data={transacao.date.toString()}
                        tipo_transacao={transacao.typeId}
                        motivo={transacao.description}
                        valor={Number(transacao.value)}
                      />
                    ))
                  ) : (
                    <div className="w-full h-30 px-3 ">
                      <div
                        className="border border-green bg-green w-full h-full rounded-md p-3 text-white
                           justify-center items-center flex"
                      >
                        Cadastre transações abaixo para começar!
                      </div>
                    </div>
                  )}
                </div>
                <Tool_Panel />
              </div>
            </div>
          </div>
          <Controles />
        </Form_Container>
      </Container>
    </Providers>
  );
}
