import { deleteCategory } from "@/app/actions/CategoriesAction";
import DeleteButton from "@/app/components/reusable-ui/DeleteButton";
import Link from "next/link";
import React from "react";

export default async function DeleteCategory({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <section>
      <div className="wrapper ">
        <div className="w-full min-h-[60vh] flex justify-center items-center">
          <div className="w-96 p-5 flex flex-col justify-center items-center gap-10 rounded-xl bg-neutral/20">
            <p className="text-md font-semibold">
              Are you sure you want to delete the category? This action cannot
              be undone.
            </p>
            <div className="w-full flex flex-row justify-between items-center">
              <Link
                href="/dashboard/categories"
                className="btn py-2 px-3 rounded-lg bg-slate-500/10"
              >
                Cancel
              </Link>
              <form action={deleteCategory}>
                <input type="hidden" name="slug" value={slug} />
                <DeleteButton>Delete</DeleteButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
