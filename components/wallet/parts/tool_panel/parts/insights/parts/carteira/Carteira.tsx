"use client";

import Caption from "@/components/shared/Caption";
import Info from "@/components/shared/Info";
import React from "react";

export default function Carteira() {
  return (
    <div className="landscape:basis-1/3 portrait:basis-1/2 h-full flex flex-col">
      <Caption text="Carteira" />
      <div className="flex flex-col justify-center flex-grow">
        <Info label="Data" info="2/11/2024" type="data" />
        <Info label="Caixa" info="R$ 2.250,00" type="entrada" />
      </div>
    </div>
  );
}
