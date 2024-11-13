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
        flex flex-row justify-center text-center landscape:h-14 portrait:h-14 items-center
            font-medium text-sm rounded-md mx-3
            ${
              tipo_transacao === "entrada"
                ? "bg-gradient-to-t from-green_dark to-green text-white border-green border"
                : tipo_transacao === "saida"
                ? "bg-gradient-to-t from-red_dark to-red text-white border-red border"
                : ""
            }`}
    >
      <div className="basis-1/3">{data}</div>
      <div className="basis-1/3">{motivo}</div>
      <div className="basis-1/3">{money_formater(valor)}</div>
    </div>
  );
}
