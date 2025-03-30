import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function EditCategoryPage() {
  return (
    <section>
      <div className="wrapper relative">
        {/* Cancel button */}
        <div className="absolute top-10 right-10">
          <Link
            href={"/dashboard/categories"}
            className="close-btn cursor-pointer py-1 rounded-full px-2 bg-pink-400/5 flex gap-2 justify-center items-center text-pink-400/70"
          >
            <X size={19} />
          </Link>
        </div>

        {/* Form */}
        <h1>Edit Category</h1>
      </div>
    </section>
  );
}
