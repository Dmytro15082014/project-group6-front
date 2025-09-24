import { create } from "zustand";

type useSetTitleForBreadState = {
  titleForBread: string;
  setTitleForBread: (title: string) => void;
};

export const useSetTitleForBread = create<useSetTitleForBreadState>((set) => ({
  titleForBread: "Мій день",
  setTitleForBread: (title: string) =>
    set({
      titleForBread: title,
    }),
}));
