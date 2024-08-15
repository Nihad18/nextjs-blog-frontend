import { useEffect, useState } from "react";
import { useThemeStore } from "@/store/store";
export function useLocalStorage() {
  const darkMode = useThemeStore((state:any)=>state.darkMode)
  const changeMode = useThemeStore((state: any) => state.changeMode);
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  useEffect(() => {
    const storedTheme = darkMode ? "dark" : "light";
    if (
      storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      changeMode(true); // dark mode
    } else {
      document.documentElement.classList.remove("dark");
      changeMode(false); // light mode
    }
  }, [darkMode]);
}
