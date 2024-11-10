import { create } from "zustand";

type state = {
  name?: string;
  email?: string;
  password?: string;
  re_password?: string;
};

type action = {
  set_name: (name: string | undefined) => void;
  set_email: (email: string | undefined) => void;
  set_password: (password: string | undefined) => void;
  set_re_password: (re_password: string | undefined) => void;
};

export const Signup_Store = create<state & action>((set) => ({
  nome: undefined,
  set_name: (name) => set({ name }),
  email: undefined,
  set_email: (email) => set({ email }),
  password: undefined,
  set_password: (password) => set({ password }),
  re_password: undefined,
  set_re_password: (re_password) => set({ re_password }),
}));
