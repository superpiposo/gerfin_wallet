"use client";

import Caption from "@/components/shared/Caption";
import Info from "@/components/shared/Info";
import React from "react";

type Props = {
  caixa: number;
  score: number;
};
export default function Carteira({ caixa, score }: Props) {
  const money_formater = (value: number): string => {
    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return formatter.format(value);
  };
  return (
    <div className="landscape:basis-1/3 portrait:basis-1/2 h-full flex flex-col">
      <Caption text="Carteira" />
      <div className="flex flex-col justify-center flex-grow">
        <Info label="Caixa" info={money_formater(caixa)} type="entrada" />
        <Info
          label="Score"
          info={score ? score.toString() : "XX"}
          type="data"
        />
      </div>
    </div>
  );
}
