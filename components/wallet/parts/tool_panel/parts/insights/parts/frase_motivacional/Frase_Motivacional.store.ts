import { create } from "zustand";
import { Frase } from "./Frases";
import frases_json from "@/components/json/Frases.json";

type state = {
  frases: Frase[];
  frase_atual: Frase;
};
type action = {
  set_frases: (frases: Frase[]) => void;
  set_frase_atual: (frase: Frase) => void;
};

export const Frase_Motivacional_Store = create<state & action>((set) => ({
  frases: frases_json.frases,
  set_frases: (frases) => set({ frases }),
  frase_atual: frases_json.frases[1],
  set_frase_atual: (frase_atual) => set({ frase_atual }),
}));
