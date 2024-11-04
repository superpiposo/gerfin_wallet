"use client";

import React from "react";

type itemProps = {
  data: string;
  motivo: string;
  valor: number;
  tipo_transacao: string;
};

export default function Item({
  data,
  motivo,
  valor,
  tipo_transacao,
}: itemProps) {
  const money_formater = (value: number): string => {
    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return formatter.format(value);
  };
  return (
    <div
      className={`
        flex flex-row justify-center text-center landscape:h-8 portrait:h-14 items-center
            border-b border-dashed font-light text-sm
            ${
              tipo_transacao === "entrada"
                ? "border-green bg-red_light"
                : tipo_transacao === "saida"
                ? "border-red bg-red_light"
                : ""
            }`}
    >
      <div className="basis-1/3">{data}</div>
      <div className="basis-1/3">{motivo}</div>
      <div className="basis-1/3">{money_formater(valor)}</div>
    </div>
  );
}
