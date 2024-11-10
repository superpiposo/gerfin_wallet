import { Wallet } from "@prisma/client";
import { create } from "zustand";

type state = {
  wallet?: Wallet;
};
type action = {
  set_wallet: (wallet: Wallet) => void;
};

export const Wallet_Store = create<state & action>((set) => ({
  wallet: undefined,
  set_wallet: (wallet) => set({ wallet }),
}));
