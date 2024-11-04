"use client";

import React from "react";
type infoProps = {
  type: string;
  label: string;
  info: string;
};

export default function Info({ label, info, type }: infoProps) {
  return (
    <div className="flex flex-row items-center gap-1">
      <span className="text-xs font-light">{label}:</span>
      <span
        className={`
        text-sm font-bold
      ${
        type === "entrada"
          ? "text-green"
          : type === "saida"
          ? "text-red"
          : type === "data"
          ? "text-stone-600"
          : ""
      }`}
      >
        {info}
      </span>
    </div>
  );
}
