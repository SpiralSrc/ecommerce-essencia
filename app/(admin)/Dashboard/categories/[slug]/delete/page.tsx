import { deleteCategory } from "@/app/actions/CategoriesAction";
import Link from "next/link";
import React from "react";

export default function DeleteCategory({ params }: { params: { id: string } }) {
  return (
    <section>
      <div className="wrapper">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-96 p-5 flex flex-col justify-center items-center gap-10 rounded-xl bg-neutral/20">
            <p className="text-md font-semibold">
              Are you sure you want to delete the product? This action cannot be
              undone.
            </p>
            <div className="w-full flex flex-row justify-between items-center">
              <Link
                href="/dashboard/collections"
                className="btn py-2 px-3 rounded-lg bg-slate-500/10"
              >
                Cancel
              </Link>
              <form action={deleteCategory}>
                <input type="hidden" name="categoryId" value={params.id} />
                <button className="py-2 px-3 bg-red-500 rounded-lg">
                  Delete
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
