import { create } from "zustand";

interface DarkModeState {
  darkMode: boolean;
  changeMode: (value: boolean) => void;
}

const getInitialThemeMode = (): boolean => {
  if (typeof window === "undefined") return false;
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    return savedTheme === "dark";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

export const useThemeStore = create<DarkModeState>((set) => ({
  darkMode: getInitialThemeMode(),
  changeMode: (value: boolean) => {
    set({ darkMode: value });
    localStorage.setItem("theme", value ? "dark" : "light");
  },
}));
