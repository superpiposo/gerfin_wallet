"use client";

import Caption from "@/components/shared/Caption";
import Info from "@/components/shared/Info";
import React from "react";

export default function Movimento_Mensal() {
  return (
    <div className="landscape:basis-1/3 portrait:basis-1/2  h-full flex flex-col gap-2">
      <Caption text="Movimentação" />
      <div className="flex flex-col justify-center flex-grow">
        <Info label="saídas" info="R$ 6.000,00" type="saida" />
        <Info label="entradas" info="R$ 2.000,00" type="entrada" />
      </div>
    </div>
  );
}
