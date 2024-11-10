"use client";

import React, { ReactNode } from "react";

export default function Form_Container({ children }: { children: ReactNode }) {
  return (
    <form
      className="landscape:basis-2/5 landscape:h-full portrait:basis-full portrait:h-full
      border border-stone-200 bg-stone-100 shadow-md dark:bg-stone-900
      rounded-md flex flex-col gap-4 justify-center items-center"
    >
      {children}
    </form>
  );
}
