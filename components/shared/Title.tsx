"use client";

import React from "react";

type titleProps = {
  text: string;
};

export default function Title({ text }: titleProps) {
  return (
    <h1
      className="landscape:text-[32pt] portrait:text-[20pt] font-bold 
    text-stone-600 dark:text-stone-200 text-center leading-10 py-6"
    >
      {text}
    </h1>
  );
}
