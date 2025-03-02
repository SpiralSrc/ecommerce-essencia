import { z } from "zod";

export const categorySchema = z.object({
  name: z.string().min(4, "Category has to be at least 4 characters long"),
  slug: z.string(),
  desc: z
    .string()
    .min(10, "Category description has to be at least 10 characters"),
  bannerUrl: z.coerce.string().min(4, "This field has to be a url of an image"),
});

export type CategorySchema = z.infer<typeof categorySchema>;
