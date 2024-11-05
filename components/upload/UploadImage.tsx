"use client";
import React from "react";
import { useDropzone } from "react-dropzone";
import { uploadImage } from "@/server/upload-image";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";

const UploadImage = () => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles: 1,
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/webp": [".webp"],
      "image/jpeg": [".jpeg"],
    },
    onDrop: async (acceptFiles, fileRejections) => {
      // Check if files are accepted
      if (acceptFiles && acceptFiles.length > 0) {
        const formData = new FormData();
        formData.append("image", acceptFiles[0]);

        // Preview the uploaded image
        const objectUrl = URL.createObjectURL(acceptFiles[0]);
        //  TODO: State management stuff to create layers, set the active layer, set the image as the active layer

        // Upload the image
        try {
          const res = await uploadImage({ image: formData });
          console.log("Upload success:", res);
        } catch (error) {
          console.error("Upload failed:", error);
        }
      } else {
        console.warn("Nod files were accepted");
      }
    },
  });

  return (
    <Card
      {...getRootProps()}
      className={cn(
        "hover:cursor-pointer hover:bg-secondary hover:border-primary transition-all ease-in-out",
        `${isDragActive ? "animate-pulse border-primary bg-secondary" : ""}`,
      )}
    >
      <CardContent className="flex flex-col h-full items-center justify-center px-2 py-24 text-sm">
        <input {...getInputProps()} />
        <div className="flex items-center flex-col justify-center gap-2">
          <p className="text-muted-foreground text-2xl">
            {isDragActive
              ? "Drop your image here!"
              : "Start by uploading an image"}
          </p>
          <p className="text-muted-foreground">
            Support formats .jepg, .jpg, .png, .webp
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default UploadImage;
