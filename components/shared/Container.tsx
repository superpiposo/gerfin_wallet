"use client";

import React, { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div
      className="w-full h-screen flex justify-center items-center 
      landscape:py-10 portrait:pt-20 portrait:pb-7 portrait:px-4
bg-green_light  
dark:bg-gradient-to-b from-emerald-600 to-emerald-800 relative"
    >
      {children}
    </div>
  );
}
