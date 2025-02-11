import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main>
      <div className="wrapper h-full flex flex-col justify-center items-center">
        <div className="flex flex-col p-10">
          <p className="text-2xl">Page cannot be found.</p>
          <Link
            href={"/"}
            className="mt-10 text-blue-400/70 hover:text-blue-500 hover:underline hover:underline-offset-2 transition-all"
          >
            Go back to homepage...
          </Link>
        </div>
      </div>
    </main>
  );
}
