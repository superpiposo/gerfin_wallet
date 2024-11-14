import { create } from "zustand";

type state = {
  description: string | null;
  date: string | null;
  value: number | null;
  transaction_type: number | null;
};
type action = {
  set_description: (description: string | null) => void;
  set_date: (date: string | null) => void;
  set_value: (value: number | null) => void;
  set_transaction_type: (transaction_type: number | null) => void;
};

export const Form_Transaction_Store = create<state & action>((set) => ({
  description: null,
  date: null,
  value: null,
  transaction_type: null,
  set_description: (description) => set({ description }),
  set_date: (date) => set({ date }),
  set_value: (value) => set({ value }),
  set_transaction_type: (transaction_type) => set({ transaction_type }),
}));
