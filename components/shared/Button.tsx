"use client";

import { HTMLAttributes } from "react";

interface buttonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  color: string;
  icon?: string;
}

import React from "react";
import Icon from "./Icon";

export default function Button({ text, onClick, color, icon }: buttonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
            border border-white outline-none
            hover:scale-105 active:scale-95
            hover:shadow-md active:shadow-none
            transition-all
            ${
              color === "green"
                ? "hover:bg-green_hover bg-green"
                : color === "blue"
                ? "bg-blue hover:bg-blue_hover"
                : color === "red"
                ? "bg-red hover:bg-red_hover"
                : ""
            } ${!icon && "w-full rounded-md py-2 px-3 text-white font-bold"}
             ${icon && " rounded-full"}
            `}
    >
      {!icon && text}
      {icon && <Icon type={icon} />}
    </button>
  );
}
