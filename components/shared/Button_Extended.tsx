"use client";

import React, { HTMLAttributes } from "react";
import Icon from "./Icon";

interface buttonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  color: string;
  icon: string;
  size: string;
}

export default function Button_Extended({
  onClick,
  color,
  icon,
  size,
  text,
}: buttonProps) {
  const btn_className = `
        border  hover:border-none group
        flex flex-row gap-2 justify-center items-center px-3 py-1 rounded-md outline-none
        transition-all group
        ${
          color === "red"
            ? "border-red hover:bg-red"
            : "border-green hover:bg-green"
        }
        
    `;
  const span_className = `
  ${
    color === "red"
      ? "text-red font-bold group-hover:text-white"
      : "text-green group-hover:text-white font-bold"
  }
        
    `;
  return (
    <button type="button" onClick={onClick} className={btn_className}>
      <Icon type={icon} color={color} size={size} />
      <span className={span_className}>{text}</span>
    </button>
  );
}
