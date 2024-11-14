"use client";

import Caption from "@/components/shared/Caption";
import Info from "@/components/shared/Info";
import React from "react";

type Props = {
  entradas: number;
  saidas: number;
};

export default function Movimento_Mensal({ entradas, saidas }: Props) {
  const money_formater = (value: number): string => {
    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return formatter.format(value);
  };
  return (
    <div className="landscape:basis-1/3 portrait:basis-1/2  h-full flex flex-col gap-2">
      <Caption text="Movimentação" />
      <div className="flex flex-col justify-center flex-grow">
        <Info label="saídas" info={money_formater(saidas)} type="saida" />
        <Info label="entradas" info={money_formater(entradas)} type="entrada" />
      </div>
    </div>
  );
}
