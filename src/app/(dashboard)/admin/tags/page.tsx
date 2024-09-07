"use client";
//next
import Link from "next/link";
//antd
import {Button, Divider } from "antd";
// components
import BreadCrumb from "@/components/shared/breadcrumb";

export default function Tags() {
  return (
    <main className='page'>
      <BreadCrumb />
      <Divider className='dark:bg-white my-3' />
      <div className='header'>
        <h1 className='text-2xl'>Tags</h1>
        <Link href='/admin/tags/create'>
          <Button type='primary' className='dark:bg-violet-700 dark:hover:!bg-violet-600' size='large'>
            Create tag
          </Button>
        </Link>
      </div>
    </main>
  );
}
