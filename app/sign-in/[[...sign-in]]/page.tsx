"use client";

import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function page() {
  return (
    <>
      <div className="wrapper">
        <div className="w-full h-full flex justify-center items-center mt-10">
          <SignIn forceRedirectUrl={"/"} />
        </div>
      </div>
    </>
  );
}
