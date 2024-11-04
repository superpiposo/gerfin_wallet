"use client";

import React from "react";
import Carteira from "./parts/carteira/Carteira";
import Movimento_Mensal from "./parts/movimento_mensal/Movimento_Mensal";
import Frase_Motivacional from "./parts/frase_motivacional/Frase_Motivaciona";

export default function Insights() {
  return (
    <>
      <Carteira />
      <Movimento_Mensal />
      <Frase_Motivacional />
    </>
  );
}
