"use client";
import { CardContent } from "@/components/ui/card";
import FormInput from "@/components/ui/form-input";
import React from "react";

const ClearanceContent = () => {
  return (
    <CardContent>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <p className="text-md text-slate-500 font-medium">Clearance name</p>
          <FormInput
            type="text"
            placeholder="e.g Laboratory clearance"
            name="name"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-md text-slate-500 font-medium">Description</p>
          <FormInput
            type="text"
            placeholder="e.g Swift clearance for seamless compliance."
            name="description"
          />
        </div>
      </div>
    </CardContent>
  );
};

export default ClearanceContent;
