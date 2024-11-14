"use client";

import React from "react";
import Carteira from "./parts/carteira/Carteira";
import Movimento_Mensal from "./parts/movimento_mensal/Movimento_Mensal";
import Frase_Motivacional from "./parts/frase_motivacional/Frase_Motivaciona";
import { Insights_Store } from "@/global_stores/Insights.store";
import { Wallet_Store } from "@/global_stores/Wallet.store";

export default function Insights() {
  const { caixa, entradas, saidas } = Insights_Store();
  const { wallet } = Wallet_Store();
  return (
    <>
      <Carteira
        caixa={Number(caixa)}
        score={Number(wallet?.score.toFixed()) || 0}
      />
      <Movimento_Mensal entradas={Number(entradas)} saidas={Number(saidas)} />
      <Frase_Motivacional />
    </>
  );
}
