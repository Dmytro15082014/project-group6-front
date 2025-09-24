import { create } from "zustand";

type UseSelectedWeek = {
  activeWeek: number;
  setActiveWeek: (week: number) => void;
};

export const useSelectedWeek = create<UseSelectedWeek>((set) => ({
  activeWeek: 5,
  setActiveWeek: (week: number) =>
    set({
      activeWeek: week,
    }),
}));
