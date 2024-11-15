"use client";
import React, { ReactNode } from "react";
import Wallet_Provider from "./wallet_provider/Wallet_Provider";
import Transaction_Provider from "./transaction_provider/Transaction_Provider";
import Insights_Provider from "./insights_provider/Insights_Provider";
import Frases_Provider from "./frases_provider/Frases_Provider";
import Session_Provider from "./session_provider/Session_Provider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <Session_Provider>
        <Wallet_Provider>
          <Transaction_Provider>
            <Insights_Provider>
              <Frases_Provider>{children}</Frases_Provider>
            </Insights_Provider>
          </Transaction_Provider>
        </Wallet_Provider>
      </Session_Provider>
    </>
  );
}
