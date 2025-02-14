import Image from "next/image";
import { dashboardNavs } from "../../lib/linksData";
import Link from "next/link";
import React from "react";

import logo from "@/public/logo.png";

const SideBar = () => {
  return (
    <div className="w-full h-screen px-10 transition-all py-20 border-r-2 border-primary shadow-xl">
      <div className="h-full flex flex-col justify-between">
        {/* Logo */}
        <div className="flex justify-center items-center gap-2 text-xl">
          <div className="relative w-7 h-7">
            <Image
              src={logo}
              alt="logo"
              fill
              sizes="100%"
              className="object-contain"
            />
          </div>

          <span className="text-gradient font-fleur ">Essencia</span>
        </div>

        {/* Links */}
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
