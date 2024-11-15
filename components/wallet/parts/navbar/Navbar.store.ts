import { create } from "zustand";

type state = {
  toggle: boolean;
};
type action = {
  set_toggle: (toggle: boolean) => void;
};

export const Navbar_Store = create<state & action>((set) => ({
  toggle: false,
  set_toggle: (toggle) => set({ toggle }),
}));
