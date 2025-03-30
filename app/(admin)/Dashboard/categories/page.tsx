import { prisma } from "@/lib/prismadb";
import { FilePen, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function CategoriesPage() {
  const categories = await prisma.category.findMany({
    orderBy: {
      name: "desc",
    },
  });
  return (
    <section>
      <div className="wrapper">
        {/* add category button */}
        <div className="flex justify-end my-2">
          <Link
            href={"/dashboard/categories/add-category"}
            className="rounded-full bg-teal-600/10 hover:bg-teal-600/30 flex p-1 smooth-effect"
          >
            <Plus className="w-6 h-6" />
          </Link>
        </div>

        {/* all categories */}
        <div className="mt-5">
          {categories?.length > 0 ? (
            <table className="w-full table-fixed border-collapse">
              <thead>
                <tr>
                  <th className="w-[150px]">Image</th>
                  <th>Name</th>

                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories &&
                  categories.map((category) => (
                    <tr key={category.id}>
                      <td className="w-[150px] flex justify-center items-center">
                        <Image
                          src={category.bannerUrl}
                          alt={category.name}
                          width={30}
                          height={30}
                          className="w-9 h-9 object-cover"
                        />
                      </td>
                      <td>
                        <Link href={`/dashboard/categories/${category.slug}`}>
                          {category.name}
                        </Link>
                      </td>
                      <td className="flex justify-end items-center gap-2">
                        <Link
                          href={`/dashboard/categories/${category.slug}/edit`}
                        >
                          <FilePen
                            size={18}
                            className="text-teal-500 cursor-pointer"
                          />
                        </Link>

                        <Link
                          href={`/dashboard/categories/${category.slug}/delete`}
                        >
                          <Trash2
                            size={20}
                            className="text-red-500 cursor-pointer"
                          />
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          ) : (
            <div className="w-full mt-32 flex justify-center items-center">
              <p className="text-lg font-semibold">
                There are no collections created.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
