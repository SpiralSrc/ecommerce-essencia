import { navData } from "@/lib/linksData";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-screen h-20 sticky top-0 left-0 z-40 backdrop-blur-md">
      <div className="w-full h-full max-w-7xl mx-auto p-3">
        <div className="w-full h-full flex justify-between items-center">
          {/* logo */}
          <p className="font-fleur text-lg font-bold">logo</p>

          {/* nav links */}
          <div className="flex justify-center items-center gap-3">
            {navData.map((nav) => (
              <Link key={nav.name} href={nav.path}>
                {nav.name}
              </Link>
            ))}
          </div>

          {/* user button */}
          <div>
            <UserButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
