"use client";

import React, { ReactNode } from "react";

export default function Tool_Panel_Container({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="max-w-full landscape:h-1/6 portrait:basis-32 absolute bottom-0 w-full">
      <div
        className="w-full h-full bg-stone-200 dark:bg-stone-800 dark:border-stone-600 flex flex-row
            border-t border-stone-300 py-4 px-4"
      >
        {children}
      </div>
    </div>
  );
}
