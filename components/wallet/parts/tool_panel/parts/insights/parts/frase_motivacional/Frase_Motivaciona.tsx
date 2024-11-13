/* eslint-disable react/no-unescaped-entities */
"use client";

import Caption from "@/components/shared/Caption";
import React from "react";

export default function Frase_Motivacional() {
  return (
    <article className="basis-1/3 h-full  flex flex-col gap-2  portrait:hidden">
      <Caption text="Frase do dia" />
      <div className="flex flex-col justify-center flex-grow">
        <p className="text-[7.5pt] dark:text-white">
          "Ganhe o que puder, gaste o que puder e dê o que puder!
          <span className="text-stone-400">John Wesley</span>"
        </p>
      </div>
    </article>
  );
}
