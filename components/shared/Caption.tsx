"use client";

import React from "react";

type captionProps = {
  text: string;
};
export default function Caption({ text }: captionProps) {
  return (
    <span className="py-1 px-2 text-xs bg-stone-300 rounded-full font-light text-stone-500 w-fit">
      {text}
    </span>
  );
}
