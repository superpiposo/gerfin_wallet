"use client";

import React from "react";

type titleProps = {
  text: string;
};

export default function Title({ text }: titleProps) {
  return (
    <h1 className="text-[32pt] font-bold text-white text-center leading-10 py-6">
      {text}
    </h1>
  );
}
