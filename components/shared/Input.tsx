"use client";

import React from "react";

type inputProps = {
  placeholder: string;
  value?: string;
  onChange: (e: string) => void;
  type?: string;
};

export default function Input({
  placeholder,
  value,
  onChange,
  type,
}: inputProps) {
  return (
    <div className="bg-white rounded-md px-4 py-2 w-full">
      <input
        type={type || "text"}
        autoComplete={"off"}
        className="outline-none bg-white p-2 w-full"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
}
