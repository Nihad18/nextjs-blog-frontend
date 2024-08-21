"use client";
// icons
import { IoSunnyOutline, IoMoonSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
// css
import "./style.css";
//zustand
import { adminStore } from "@/store/admin";
import { useTheme } from "next-themes";
function Navbar() {
  const toggle = adminStore((state: any) => state.toggle);
  const setToggle = adminStore((state: any) => state.setToggle);
  const { theme, setTheme } = useTheme();

  return (
    <nav className='navbar'>
      {theme === "dark" ? (
        <IoSunnyOutline
          className='cursor-pointer'
          onClick={() => {
            setTheme("light");
          }}
        />
      ) : (
        <IoMoonSharp
          className='cursor-pointer'
          onClick={() => {
            setTheme("dark");
          }}
        />
      )}
      <GiHamburgerMenu
        onClick={() => setToggle(!toggle)}
        className='lg:hidden cursor-pointer'
      />
    </nav>
  );
}
export default Navbar;
