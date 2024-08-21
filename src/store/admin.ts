import { create } from "zustand";

interface StoreState {
  toggle: boolean;
  setToggle: () => void;
}

export const adminStore = create<StoreState>((set) => ({
  toggle: false,
  setToggle: () => set((state) => ({ toggle: !state.toggle })),
}));

