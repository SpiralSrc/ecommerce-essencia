import { dashboardNavs } from "../../lib/linksData";
import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <div className="w-full h-screen px-10 transition-all py-20 border-r-2 border-primary shadow-xl">
      <div className=" h-full flex flex-col justify-between">
        <span>logo</span>
        <div className="w-full flex flex-col gap-5">
          {dashboardNavs.map((nav, id) => (
            <Link key={id} href={nav.path} className="flex gap-1">
              {nav.icon} {nav.name}
            </Link>
          ))}
        </div>
        <div>
          <p>Footer</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
