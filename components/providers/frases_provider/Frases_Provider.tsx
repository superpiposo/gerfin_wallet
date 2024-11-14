"use client";

import { Frase_Motivacional_Store } from "@/components/wallet/parts/tool_panel/parts/insights/parts/frase_motivacional/Frase_Motivacional.store";
import React, { ReactNode, useEffect } from "react";

export default function Frases_Provider({ children }: { children: ReactNode }) {
  const { set_frase_atual, frases } = Frase_Motivacional_Store();
  useEffect(() => {
    const intervalId = setInterval(() => {
      set_frase_atual(frases[Math.floor(Math.random() * frases.length)]);
    }, 1000 * 6 * 10);
    return () => clearInterval(intervalId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>{children}</>;
}
