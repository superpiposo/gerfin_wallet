/* eslint-disable react/no-unescaped-entities */
"use client";

import Caption from "@/components/shared/Caption";
import React from "react";
import { Frase_Motivacional_Store } from "./Frase_Motivacional.store";

export default function Frase_Motivacional() {
  const { frase_atual } = Frase_Motivacional_Store();
  return (
    <article className="basis-1/3 h-full  flex flex-col gap-2  portrait:hidden">
      <Caption text="Frase do dia" />
      <div className="flex flex-col justify-center flex-grow">
        <p className="text-[7.5pt] dark:text-white">"{frase_atual.frase}</p>
        <span className="text-[7.5pt] text-stone-400">
          {frase_atual.autor}"
        </span>
      </div>
    </article>
  );
}
