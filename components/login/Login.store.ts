import { create } from "zustand";

type state = {
  email?: string;
  password?: string;
};

type action = {
  set_email: (email: string) => void;
  set_password: (passoword: string) => void;
};

export const Login_Store = create<state & action>((set) => ({
  email: undefined,
  set_email: (email: string) => set({ email }),
  password: undefined,
  set_password: (password) => set({ password }),
}));
