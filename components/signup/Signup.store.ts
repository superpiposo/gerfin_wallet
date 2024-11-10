import { CreateUser } from "@/services/database/user/User";
import { create } from "zustand";

type state = {
  create_user?: CreateUser;
};

type action = {
  set_create_user: (create_user: CreateUser | undefined) => void;
};

export const Signup_Store = create<state & action>((set) => ({
  create_user: undefined,
  set_create_user: (create_user) => set({ create_user }),
}));
