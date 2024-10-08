"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// images
import TailwindLogo from "../../../../../public/tailwindcss.svg";
// icons
import {
  IoSearchOutline,
  IoSunnyOutline,
  IoMoonSharp,
  IoClose,
} from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
// css
import "./navbar.css";
import { useTheme } from "next-themes";
function Navbar() {
  const [toggle, setToggle] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  const routes: string[] = ["Blogs", "Tags", "About", "Login"];
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
            <Link
              onClick={() => setToggle(false)}
              key={index}
              href={"/" + route.toLowerCase()}
            >
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
      </div>
    </header>
  );
}
export default Navbar;
