"use client";

import { HTMLAttributes } from "react";

interface buttonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  color: string;
  icon?: string;
  size?: string;
}

import React from "react";
import Icon from "./Icon";

export default function Button({
  text,
  onClick,
  color,
  icon,
  size,
}: buttonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
            outline-none
            hover:scale-105 active:scale-95
            hover:shadow-md active:shadow-none
            transition-all dark:border-white dark:border
            ${
              color === "green"
                ? "hover:bg-green_hover bg-green text-white"
                : color === "blue"
                ? "bg-blue hover:bg-blue_hover text-white"
                : color === "red"
                ? "bg-red hover:bg-red_hover text-white"
                : color === "white"
                ? "bg-white hover:bg-stone-200 text-stone-600"
                : "text-white"
            } ${!icon && "w-full rounded-md py-2 px-3 font-bold"}
             ${icon && " rounded-full"}
            `}
    >
      {!icon && text}
      {icon && <Icon type={icon} size={size} color={color} />}
    </button>
  );
}
