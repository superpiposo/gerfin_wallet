"use client";

import React, { ReactNode } from "react";

export default function Tool_Panel_Container({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="w-full landscape:h-32 portrait:h-60 landscape:p-4 portrait:p-2 absolute bottom-0 potrait:right-2">
      <div
        className="w-full h-full bg-stone-200 dark:bg-stone-900 dark:border-stone-700 flex landscape:flex-row portrait:flex-col
            rounded-md border border-stone-300 py-2 px-4"
      >
        {children}
      </div>
    </div>
  );
}
