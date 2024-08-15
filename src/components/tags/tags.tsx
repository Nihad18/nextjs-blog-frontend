"use client";
import { GetTags } from "@/services/blog-service";
import React from "react";

const Tags = () => {
  const { data, error, isLoading } = GetTags();
  if (isLoading) {
    console.log("...loading");
  }
  return (
    <div>
      {data?.items?.length > 1
        ? data?.items?.map((item: any) => (
            <div key={item.id}>{item.tagName}</div>
          ))
        : "tags not found"}
    </div>
  );
};

export default Tags;
