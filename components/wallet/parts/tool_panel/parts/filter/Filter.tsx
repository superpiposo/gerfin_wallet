"use client";

import Button_Extended from "@/components/shared/Button_Extended";
import { Transaction_Store } from "@/global_stores/Transaction.store";
import React from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { Filter_Service } from "./Filter.service";

const filter_service = new Filter_Service();

export default function Filter() {
  const { filtred_dates } = Transaction_Store();
  return (
    <div className="w-full h-full flex flex-col">
      <span className="text-sm font-medium">
        Filtre as transações por data:
      </span>
      <div
        className="h-full w-full flex landscape:flex-row portrait:flex-col gap-4
     justify-center items-center relative"
      >
        <div className="relative flex-grow h-full z-20 flex justify-center items-center">
          <Datepicker
            value={filtred_dates}
            onChange={(newValue) => {
              filter_service.change_filter_date(newValue);
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
          onClick={() => {
            filter_service.reset_filter();
          }}
        />
        <Button_Extended
          color="green"
          text="filtrar"
          icon="filtro"
          size="medium"
          onClick={() => {
            filter_service.filter_date();
          }}
        />
      </div>
    </div>
  );
}
