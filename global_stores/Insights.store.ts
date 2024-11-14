import { create } from "zustand";

type state = {
  caixa: number | null;
  entradas: number | null;
  saidas: number | null;
};
type action = {
  set_caixa: (caixa: number) => void;
  set_entradas: (entradas: number) => void;
  set_saidas: (saidas: number) => void;
};

export const Insights_Store = create<state & action>((set) => ({
  caixa: null,
  set_caixa: (caixa) => set({ caixa }),
  entradas: null,
  set_entradas: (entradas) => set({ entradas }),
  saidas: null,
  set_saidas: (saidas) => set({ saidas }),
}));
