"use client";

import React, { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div
      className="w-full h-screen flex justify-center items-center
bg-green_light py-10 portrait:px-4 dark:bg-green_dark relative"
    >
      {children}
    </div>
  );
}
