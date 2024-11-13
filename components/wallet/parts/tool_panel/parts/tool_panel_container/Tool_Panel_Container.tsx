"use client";

import React, { ReactNode } from "react";

export default function Tool_Panel_Container({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="max-w-full landscape:basis-32 portrait:basis-32">
      <div
        className="w-full h-full bg-stone-200 dark:bg-stone-800 dark:border-stone-600 flex flex-row
            border-t border-stone-300 py-4 px-4"
      >
        {children}
      </div>
    </div>
  );
}
