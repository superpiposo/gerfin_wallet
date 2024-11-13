import { Transaction } from "@prisma/client";
import { create } from "zustand";

type state = {
  transactions?: Transaction[];
  take: number;
  skip: number;
};
type action = {
  set_transactions: (transactions: Transaction[]) => void;
  set_take: (take: number) => void;
  set_skip: (skip: number) => void;
};

export const Transaction_Store = create<state & action>((set) => ({
  transactions: undefined,
  set_transactions: (transactions) => set({ transactions }),
  take: 10,
  set_take: (take) => set({ take }),
  skip: 0,
  set_skip: (skip) => set({ skip }),
}));
