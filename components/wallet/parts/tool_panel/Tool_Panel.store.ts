import { create } from "zustand";

type state = {
  session: string;
};
type action = {
  set_session: (session: string) => void;
};

export const Tool_Panel_Store = create<state & action>((set) => ({
  session: "summary",
  set_session: (session) => set({ session }),
}));
