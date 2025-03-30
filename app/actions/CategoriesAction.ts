"use server";

import { prisma } from "@/lib/prismadb";
import { categorySchema } from "@/lib/validations";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { deleteImage } from "./DeleteImage";

export const addCategory = async (formData: FormData) => {
  const parsedData = categorySchema.safeParse({
    name: formData.get("name"),
    slug: formData.get("name"),
    desc: formData.get("desc"),
    bannerUrl: formData.get("bannerUrl"),
  });

  if (
    !parsedData.data?.name ||
    !parsedData.data.desc ||
    !parsedData.data.bannerUrl
  ) {
    throw new Error("All fields are required!");
  }

  //   getting the public id from parsedData.data.bannerUrl
  const bannerUrl = parsedData.data.bannerUrl;
  const publicId = bannerUrl.split("/").slice(-2).join("/").split(".")[0];

  const newSlug = parsedData.data?.name
    .replace(/[^\w\s-]/g, "") // Remove special characters except for whitespace and hyphens
    .replace(/\s+/g, "-") // Replace whitespace with hyphens
    .toLowerCase();

  try {
    await prisma.category.create({
      data: {
        name: parsedData.data?.name,
        slug: newSlug,
        desc: parsedData.data?.desc,
        bannerUrl: parsedData.data?.bannerUrl,
      },
    });
  } catch (error) {
    console.log("Error adding category", error);

    // Attempt to delete the uploaded image if category creation fails
    try {
      await deleteImage(publicId);
    } catch (deleteError) {
      console.error("Failed to delete the image from Cloudinary:", deleteError);
    }
  }

  revalidatePath("/dashboard/categories/add-category");
  redirect("/dashboard/categories");
};

export async function deleteCategory(formData: FormData) {
  const slug = formData.get("slug") as string;

  await prisma.category.delete({
    where: {
      slug,
    },
  });

  revalidatePath("/dashboard/categories");
  redirect("/dashboard/categories");
}