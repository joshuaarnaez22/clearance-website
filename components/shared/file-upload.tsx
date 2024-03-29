"use client";
import { UploadDropzone } from "@/lib/uploadthing";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import React from "react";
import toast from "react-hot-toast";

interface FileUploadProps {
  onChange: (res: any) => void;
  endpoint: keyof typeof ourFileRouter;
}
const FileUpload = ({ onChange, endpoint }: FileUploadProps) => {
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res);
        console.log("upload complete");
      }}
      onUploadError={(error: Error) => {
        console.log("upload failed", error);
        toast.error(error.message);
      }}
    />
  );
};

export default FileUpload;
