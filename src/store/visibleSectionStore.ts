import { SECTIONS } from "@/constants";
import { create } from "zustand";

const initialState = {
  visibleSection: SECTIONS.HERO
};

type InitialState = typeof initialState;

type Store = InitialState & {
  setVisibleSection: (sectionName: SECTIONS) => void;
};

const useVisibleSectionStore = create<Store>((set, get) => ({
  ...initialState,
  setVisibleSection: (sectionName) => {
    if (get().visibleSection === sectionName) return;
    set({
      visibleSection: sectionName
    });
  },
  reset: () => {
    set(initialState);
  }
}));

export default useVisibleSectionStore;
