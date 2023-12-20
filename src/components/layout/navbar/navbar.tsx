"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// images
import TailwindLogo from "@/assets/images/tailwindcss.svg";
// icons
import {
  IoSearchOutline,
  IoSunnyOutline,
  IoMoonSharp,
  IoClose,
} from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
// hooks
import { useThemeStore } from "@/store/store.tsx";
// store
import { useLocalStorage } from "@/utils/hooks/useLocalStorage";
// css
import "./navbar.css";
function Navbar() {
  const [toggle, setToggle] = useState<boolean>(false);

  const darkMode = useThemeStore((state: any) => state.darkMode);
  const changeMode = useThemeStore((state: any) => state.changeMode);

  useLocalStorage();

  const routes: string[] = ["Blogs", "Tags", "About"];
  return (
    <header className='header'>
      {/* logo */}
      <div className='flex items-center'>
        <Link href='/' className='flex'>
          <Image src={TailwindLogo} width={54} height={43} alt='logo' />
          <span className='logo-text'>TailwindBlog</span>
        </Link>
      </div>
      {/* routes */}
      <div className='route-wrapper'>
        <div
          className={`${
            toggle
              ? "toggle translate-x-0 "
              : "toggle translate-x-[100vw] lg:translate-x-0"
          } transition-all md:flex space-x-4 lg:space-x-6`}
        >
          {routes.map((route, index) => (
            <Link key={index} href={"/" + route.toLowerCase()}>
              {route}
            </Link>
          ))}
          {toggle && (
            <IoClose
              className='close-button'
              onClick={() => setToggle(false)}
            />
          )}
        </div>
        <IoSearchOutline />
        {darkMode ? (
          <IoMoonSharp
            className='cursor-pointer'
            onClick={() => {
              changeMode(false);
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <IoSunnyOutline
            className='cursor-pointer'
            onClick={() => {
              changeMode(true);
              localStorage.setItem("theme", "light");
            }}
          />
        )}
        <GiHamburgerMenu
          onClick={() => setToggle(!toggle)}
          className='md:hidden cursor-pointer'
        />
      </div>
    </header>
  );
}
export default Navbar;
