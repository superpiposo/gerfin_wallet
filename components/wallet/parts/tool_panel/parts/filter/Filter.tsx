"use client";

import Button_Extended from "@/components/shared/Button_Extended";
import { Transaction_Store } from "@/global_stores/Transaction.store";
import React from "react";
import Datepicker from "react-tailwindcss-datepicker";

export default function Filter() {
  const { filtred_dates, set_filtred_dates } = Transaction_Store();
  return (
    <div
      className="h-full w-full flex landscape:flex-row portrait:flex-col gap-4
     justify-center items-center relative"
    >
      <div className="relative flex-grow h-full z-20 flex justify-center items-center">
        <Datepicker
          value={filtred_dates}
          onChange={(newValue) => {
            set_filtred_dates(newValue);
            console.log(filtred_dates);
          }}
          primaryColor="indigo"
          displayFormat="DD-MM-YYYY"
          useRange={false}
        />
      </div>
      <Button_Extended
        color="red"
        text="limpar"
        icon="cancelar"
        size="medium"
      />
    </div>
  );
}
