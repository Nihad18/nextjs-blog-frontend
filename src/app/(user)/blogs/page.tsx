"use client";
import { GetBlogs } from "@/services/blog-service";
import React from "react";
import Image from "next/image";

const Blogs = () => {
  const { data, error, isLoading } = GetBlogs();
  if (isLoading) {
    console.log("...loading");
  }
  console.log(data);
  return (
    <div>
      {data?.items?.length > 0
        ? data?.items?.map((item: any) => (
            <div key={item.id}>
              <div>{item.slug}</div>
              <div>
                {" "}
                <Image
                  src={item.coverImg}
                  width={500}
                  height={500}
                  alt='Picture of the author'
                />
              </div>
              <div>
              </div>
            </div>
          ))
        : "Blogs not found"}
    </div>
  );
};

export default Blogs;
