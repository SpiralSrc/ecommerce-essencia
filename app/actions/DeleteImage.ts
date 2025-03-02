"use server";

import cloudinary from "cloudinary";
import { revalidatePath } from "next/cache";

cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function deleteImage(publicId: string) {
  try {
    const result = await cloudinary.v2.uploader.destroy(publicId);
    if (result.result !== "ok") {
      throw new Error(`Failed to delete image: ${result.result}`);
    }
    revalidatePath("/dashboard/products/add-product");
  } catch (error) {
    console.error("Error deleting image from Cloudinary:", error);
    throw new Error("Failed to delete image");
  }
}
