import { Transaction } from "@prisma/client";
import { DateValueType } from "react-tailwindcss-datepicker";
import { create } from "zustand";

const initialDates = { startDate: null, endDate: null };

type state = {
  transactions?: Transaction[];
  take: number;
  skip: number;
  sorted_by: string;
  filtred_dates: DateValueType;
  get_transactions: boolean;
};
type action = {
  set_transactions: (transactions: Transaction[]) => void;
  set_take: (take: number) => void;
  set_skip: (skip: number) => void;
  set_sorted_by: (sorted_by: string) => void;
  set_filtred_dates: (filtred_dates: DateValueType) => void;
  set_get_transactions: (get_transactions: boolean) => void;
};

export const Transaction_Store = create<state & action>((set) => ({
  transactions: undefined,
  set_transactions: (transactions) => set({ transactions }),
  take: 10,
  set_take: (take) => set({ take }),
  skip: 0,
  set_skip: (skip) => set({ skip }),
  sorted_by: "insert_date",
  set_sorted_by: (sorted_by) => ({ sorted_by }),
  get_transactions: false,
  set_get_transactions: (get_transactions) => set({ get_transactions }),
  filtred_dates: initialDates,
  set_filtred_dates: (filtred_dates) => set({ filtred_dates }),
}));
