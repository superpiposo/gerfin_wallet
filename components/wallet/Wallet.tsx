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
import { Transaction_Store } from "@/global_stores/Transaction.store";
import { Wallet_Service } from "./Wallet.service";
import Insights_Provider from "../providers/insights_provider/Insights_Provider";

const wallet_service = new Wallet_Service();

export default function Wallet() {
  const { transactions } = Transaction_Store();
  return (
    <Wallet_Provider>
      <Transaction_Provider>
        <Insights_Provider>
          <Container>
            <Toggle_Theme />
            <Form_Container>
              <div className="flex-grow w-5/6 pt-10">
                <div className="w-full h-full flex flex-col rounded-md border-stone-300 dark:border-stone-700 overflow-hidden relative">
                  <div
                    className="w-full flex-grow bg-white dark:bg-stone-700 rounded-md border border-stone-300 
          flex flex-col gap-2 relative overflow-hidden"
                  >
                    <div className="flex flex-col gap-3 overflow-y-scroll basis-5/6 py-3">
                      {transactions &&
                        transactions.length > 0 &&
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
                        ))}
                    </div>
                    <Tool_Panel />
                  </div>
                </div>
              </div>
              <Controles />
            </Form_Container>
          </Container>
        </Insights_Provider>
      </Transaction_Provider>
    </Wallet_Provider>
  );
}
