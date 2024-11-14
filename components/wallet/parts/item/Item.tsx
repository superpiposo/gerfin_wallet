"use client";

import Button from "@/components/shared/Button";
import React from "react";

type itemProps = {
  data: string;
  motivo: string;
  valor: number;
  tipo_transacao: number;
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
  const date = new Date(data);
  return (
    <div
      className={`
        flex flex-row justify-center text-left landscape:h-14 portrait:h-14 items-center
            font-medium text-sm rounded-md mx-3 px-2 py-5 gap-3
            ${
              tipo_transacao === 1
                ? "bg-gradient-to-t from-green_dark to-green text-white border-green border"
                : tipo_transacao === 2
                ? "bg-gradient-to-t from-red_dark to-red text-white border-red border"
                : ""
            }`}
    >
      <div className="basis-1/4">
        {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
      </div>
      <div className="basis-1/4">{motivo}</div>
      <div className="basis-1/4">{money_formater(valor)}</div>
      <div className="basis-1/4 flex flex-row gap-1 justify-end">
        <Button color="white" text="deletar" icon="deletar" size="small" />
      </div>
    </div>
  );
}
