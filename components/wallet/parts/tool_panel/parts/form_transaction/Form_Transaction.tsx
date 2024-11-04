"use client";

import Input from "@/components/shared/Input";
import React from "react";

export default function Form_Transaction() {
  return (
    <div className="h-full w-full flex landscape:flex-row portrait:flex-col gap-2 justify-center items-center">
      <Input onChange={() => {}} placeholder="Descrição..." />
      <Input onChange={() => {}} placeholder="date" type="date" />
      <Input onChange={() => {}} placeholder="R$ 0,00" type="number" />
    </div>
  );
}
