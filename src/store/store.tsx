import { create } from "zustand";

interface DarkModeState {
  darkMode: boolean;
  changeMode: (by: boolean) => void;
}
const checkLocalStorage =
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches);
export const useThemeStore = create<DarkModeState>()((set: any) => ({
  darkMode: checkLocalStorage,
  changeMode: (value: boolean) => {
    set({ darkMode: value });
    localStorage.setItem("theme", value ? "dark" : "light");
  },
}));
