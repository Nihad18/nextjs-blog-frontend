import { useEffect } from "react";
import { useThemeStore } from "@/store/store.tsx";
export function useLocalStorage() {
  const changeMode = useThemeStore((state: any) => state.changeMode);
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      changeMode(true); // dark mode
    } else {
      changeMode(false); // light mode
    }
  }, [changeMode]);
}
