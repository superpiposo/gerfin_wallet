import { Wallet } from "@prisma/client";
import { create } from "zustand";

type state = {
  wallet?: Wallet;
  get_wallet: boolean;
};
type action = {
  set_wallet: (wallet: Wallet | undefined) => void;
  set_get_wallet: (get_wallet: boolean) => void;
};

export const Wallet_Store = create<state & action>((set) => ({
  wallet: undefined,
  set_wallet: (wallet) => set({ wallet }),
  get_wallet: false,
  set_get_wallet: (get_wallet) => set({ get_wallet }),
}));
