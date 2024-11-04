"use client";

import React, { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div
      className="w-full h-screen flex justify-center items-center
bg-gradient-to-t from-[#015B3C] to-[#5CBF5F] py-10 portrait:px-4"
    >
      {children}
    </div>
  );
}
