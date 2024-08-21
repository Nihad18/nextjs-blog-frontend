"use client";
import Link from "next/link";
// icons
import { IoClose } from "react-icons/io5";
// css
import "./style.css";
//zustand
import { adminStore } from "@/store/admin";
import { Divider } from "antd";
function Sidebar() {
  const toggle = adminStore((state: any) => state.toggle);
  const setToggle = adminStore((state: any) => state.setToggle);
  return (
    <aside className='sidebar'>
      <div
        className={`${
          toggle ? "translate-x-0 " : "translate-x-[-100vw] lg:translate-x-0"
        } toggle transition-all flex justify-center items-center flex-col`}
      >
        <Link href='/' className='text-3xl mt-3 mb-5 link'>
          Home
        </Link>

        <Divider className='bg-gray min-w-[100px] w-[100px] my-3' />

        <Link href='/admin' className='link' onClick={() => setToggle(false)}>
          Admin
        </Link>

        <Divider className='bg-gray min-w-[100px] w-[100px] my-3' />

        <Link href='/admin/tags' className='link' onClick={() => setToggle(false)}>
          Tags
        </Link>

        <Divider className='bg-gray min-w-[100px] w-[100px] my-3' />

        <Link href='/' className='link' onClick={() => setToggle(false)}>
          Blogs
        </Link>
        <Divider className='bg-gray min-w-[100px] w-[100px] my-3' />

        <Link href='/login' className='link' onClick={() => setToggle(false)}>
          Login
        </Link>

        <Divider className='bg-gray min-w-[100px] w-[100px] my-3' />
        {toggle && (
          <IoClose className='close-button' onClick={() => setToggle(false)} />
        )}
      </div>
    </aside>
  );
}
export default Sidebar;
