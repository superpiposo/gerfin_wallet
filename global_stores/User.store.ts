import { User } from "@prisma/client";
import { create } from "zustand";

type state = {
  user?: User;
};
type action = {
  set_user: (user: User) => void;
};

export const User_Store = create<state & action>((set) => ({
  user: undefined,
  set_user: (user) => set({ user }),
}));
