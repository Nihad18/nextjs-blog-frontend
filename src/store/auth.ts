import { create } from "zustand";

interface AuthState {
  token: string;
  setToken: (token: string) => void;
}

export const adminStore = create<AuthState>((set) => ({
  token: localStorage.getItem("token") || "",
  setToken: (token) => set({ token }),
}));