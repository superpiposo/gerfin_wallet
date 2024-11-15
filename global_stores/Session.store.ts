import { create } from "zustand";

type state = {
  logout: boolean;
};
type action = {
  set_logout: (logou: boolean) => void;
};

export const Session_Store = create<state & action>((set) => ({
  logout: false,
  set_logout: (logout) => set({ logout }),
}));
