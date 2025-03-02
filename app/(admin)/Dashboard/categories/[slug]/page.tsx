import { prisma } from "@/lib/prismadb";
import React from "react";

export default async function SingleCategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const category = await prisma.category.findUnique({
    where: {
      slug: params.slug,
    },
  });
  return (
    <section>
      <div className="wrapper">
        <h1>All {category?.name} Products</h1>
      </div>
    </section>
  );
}
