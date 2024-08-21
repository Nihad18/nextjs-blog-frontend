import Tags from "@/components/user/tags";
import React, { Suspense } from "react";

const page = () => {
  return (
    <>
      <h1>Tags</h1>
      <Suspense fallback={<p>Loading tags...</p>}>
        <Tags />
      </Suspense>
    </>
  );
};

export default page;
