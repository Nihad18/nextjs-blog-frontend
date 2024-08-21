"use client";

import "@/assets/styles/admin.css";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Divider } from "antd";
import Link from "next/link";
export default function Tags() {
  return (
    <main className='page'>
      <Breadcrumb
        className='breadcrumb'
        items={[
          {
            title: (
              <>
                <HomeOutlined />
                <Link href='/admin'>Admin</Link>
              </>
            ),
          },
          {
            title: <span>Tags</span>,
          },
        ]}
      />
      <Divider className='bg-gray my-3' />
      <div className='header'>
        <h1 className='text-2xl'>Tags</h1>
        <Link href='/admin/tags/create'>
          <Button type='primary' size='large'>
            Create tag
          </Button>
        </Link>
      </div>
    </main>
  );
}
