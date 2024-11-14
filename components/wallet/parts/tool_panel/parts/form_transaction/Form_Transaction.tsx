"use client";

import Input from "@/components/shared/Input";
import React from "react";
import { Form_Transaction_Store } from "./Form_Transaction.store";
import { Form_Transaction_Service } from "./Form_Transaction.service";

const form_transaction_service = new Form_Transaction_Service();

export default function Form_Transaction() {
  const { description, date, value } = Form_Transaction_Store();
  return (
    <div className="h-full w-full flex landscape:flex-row portrait:flex-col gap-2 justify-center items-center">
      <Input
        onChange={(e) => {
          form_transaction_service.change_description(e);
        }}
        placeholder="Descrição..."
        value={description || ""}
      />
      <Input
        onChange={(e) => {
          form_transaction_service.change_date(e);
        }}
        placeholder="date"
        type="date"
        value={date || ""}
      />
      <Input
        onChange={(e) => {
          form_transaction_service.change_value(Number(e));
        }}
        placeholder="R$ 0,00"
        type="number"
        value={value ? value.toString() : ""}
      />
    </div>
  );
}
