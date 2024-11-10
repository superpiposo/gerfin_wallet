import { Transaction } from "@prisma/client";
import { create } from "zustand";

type state = {
  transactions?: Transaction[];
};
type action = {
  set_transactions: (transactions: Transaction[]) => void;
};

export const Transaction_Store = create<state & action>((set) => ({
  transactions: undefined,
  set_transactions: (transactions) => set({ transactions }),
}));
