// import { auth } from "@clerk/nextjs/server";
import React from "react";

export default async function DashboardHome() {
  // const {sessionClaims} = await auth()
  return (
    <div className="w-full h-full">
      <div className="wrapper">
        <h1 className="text-center">Dashboard</h1>
      </div>
    </div>
  );
}
