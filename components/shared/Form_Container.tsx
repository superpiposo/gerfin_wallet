"use client";

import React, { ReactNode } from "react";

export default function Form_Container({ children }: { children: ReactNode }) {
  return (
    <form
      className="landscape:basis-2/5 landscape:h-full portrait:basis-full portrait:h-full
      bg-[#323232] bg-blend-multiply bg-opacity-[67%] 
      rounded-md shadow-lg flex flex-col gap-4 justify-center items-center"
    >
      {children}
    </form>
  );
}
