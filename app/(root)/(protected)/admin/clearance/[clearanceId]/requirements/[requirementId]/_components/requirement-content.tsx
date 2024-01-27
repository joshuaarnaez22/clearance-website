import FileUpload from "@/components/shared/file-upload";
import { CardContent } from "@/components/ui/card";
import FormInput from "@/components/ui/form-input";
import Textarea from "@/components/ui/textarea";
import React from "react";
import toast from "react-hot-toast";

const RequirementContent = () => {
  const onSubmit = (url: any) => {
    console.log(url);
  };
  return (
    <CardContent>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className=" space-y-4">
          <div className="flex flex-col space-y-2">
            <p className="text-md text-slate-500 font-medium">Name</p>
            <FormInput
              type="text"
              placeholder="e.g School clearance: ID, fees, completed forms, and signatures."
              name="name"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-md text-slate-500 font-medium">Description</p>
            <Textarea
              placeholder="e.g Swift clearance for seamless compliance."
              name="description"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <FileUpload
            endpoint="requirementsAttachments"
            onChange={(url) => {
              if (url) {
                onSubmit({ url: url });
                toast.success("Image saved successfully");
              }
            }}
          />
        </div>
      </div>
    </CardContent>
  );
};

export default RequirementContent;
