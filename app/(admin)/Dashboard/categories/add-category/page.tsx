import AddCategoryForm from "@/components/admin/categories/AddCategoryForm";
import React from "react";

export default function AddCollectionsPage() {
  return (
    <section>
      <div className="wrapper">
        <h1 className="text-center text-2xl font-bold">Add Category Page</h1>
        <div className="px-3 py-4 mt-5">
          <AddCategoryForm />
        </div>
      </div>
    </section>
  );
}
