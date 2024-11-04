import { create } from "zustand";

type state = {
  email: string;
};

type action = {
  set_email: (email: string) => void;
};

export const Login_Store = create<state & action>((set) => ({
  email: "",
  set_email: (email: string) => set({ email }),
}));
