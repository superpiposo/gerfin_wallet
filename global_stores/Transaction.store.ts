import { Transaction } from "@prisma/client";
import { create } from "zustand";

type state = {
  transactions?: Transaction[];
  take: number;
  skip: number;
  sorted_by: string;
  get_transactions: boolean;
};
type action = {
  set_transactions: (transactions: Transaction[]) => void;
  set_take: (take: number) => void;
  set_skip: (skip: number) => void;
  set_sorted_by: (sorted_by: string) => void;
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
}));
