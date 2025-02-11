import SideBar from "@/app/components/admin/Sidebar";
import React from "react";

export default function dashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full flex">
      <div className="hidden xl:flex xl:w-[15%]">
        <SideBar />
      </div>
      <div className="w-full xl:w-[85%] overflow-y-scroll py-20">
        {children}
      </div>
    </div>
  );
}
