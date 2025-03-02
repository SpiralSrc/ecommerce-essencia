"use client";

import { addCategory } from "@/app/actions/CategoriesAction";
import { deleteImage } from "@/app/actions/DeleteImage";
import Form from "@/components/reusableUI/Form";
import Input from "@/components/reusableUI/Input";
import SubmitButton from "@/components/reusableUI/SubmitButton";
import { CloudUpload, Trash2 } from "lucide-react";
import { CldImage, CldUploadWidget } from "next-cloudinary";
// import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface CloudinaryResponse {
  public_id: string;
  secure_url: string;
}

const AddCategoryForm = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [bannerUrl, setBannerUrl] = useState<CloudinaryResponse | null>(null);

  //   const router = useRouter();

  const handleFormSubmit = async (formData: FormData) => {
    formData.set("bannerUrl", bannerUrl?.secure_url || "");

    try {
      await addCategory(formData);
    } catch (error) {
      console.error("Error adding new category", error);
    }

    // if (!result.success) {
    //   console.log("Failed to create category:", result.message);
    // } else {
    //   // Reset state variables only if creation was successful
    setName("");
    setDesc("");
    setBannerUrl(null);

    //   router.push("/dashboard/collections");
    // }
  };

  return (
    <Form action={handleFormSubmit}>
      {/* category image */}
      <Input
        type="hidden"
        name="bannerUrl"
        value={bannerUrl?.secure_url || ""}
        placeholder=""
      />
      <div className="w-full flex flex-col gap-5 justify-start items-start">
        <CldUploadWidget
          uploadPreset="essencia"
          options={{
            autoMinimize: true,
          }}
          onSuccess={(result, { widget }) => {
            if (
              result?.info &&
              typeof result.info !== "string" &&
              "secure_url" in result.info &&
              "public_id" in result.info
            ) {
              setBannerUrl({
                public_id: result.info.public_id,
                secure_url: result.info.secure_url,
              });
            } // { public_id, secure_url, etc }

            widget.close();
          }}
        >
          {({ open }) => {
            return (
              <div
                onClick={() => open()}
                className="relative cursor-pointer w-64 h-64 overflow-hidden rounded-xl flex justify-center items-center border border-teal-500/20"
              >
                {bannerUrl?.secure_url ? (
                  <CldImage
                    src={`${bannerUrl.public_id}`}
                    fill
                    alt="Product image"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex flex-col justify-center items-center gap-2">
                    <CloudUpload />
                    <button>Upload Image</button>
                  </div>
                )}
                {bannerUrl?.secure_url && (
                  <Trash2
                    size={25}
                    onClick={async (e) => {
                      e.stopPropagation();
                      try {
                        await deleteImage(bannerUrl.public_id);
                        setBannerUrl(null); // Remove the image from state after successful deletion
                      } catch (error) {
                        console.error("Failed to delete image:", error);
                      }
                    }}
                    className="absolute top-0 right-0 text-red-600 hover:fill-red-600 hover:shadow-lg z-10"
                  />
                )}
              </div>
            );
          }}
        </CldUploadWidget>
      </div>

      {/* category name & desc */}
      <Input
        type="text"
        name="name"
        value={name}
        placeholder="Category name"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="text"
        name="desc"
        value={desc}
        placeholder="Description"
        onChange={(e) => setDesc(e.target.value)}
      />
      <SubmitButton>Add Category</SubmitButton>
    </Form>
  );
};

export default AddCategoryForm;
