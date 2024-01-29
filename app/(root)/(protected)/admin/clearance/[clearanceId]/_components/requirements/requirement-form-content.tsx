import { CardContent } from "@/components/ui/card";
import FormInput from "@/components/ui/form-input";
import React from "react";

const RequirementFormContent = () => {
  return (
    <CardContent>
      <div className="flex flex-col space-y-2">
        <p className="text-md text-slate-500 font-medium">Requirement name</p>
        <FormInput
          type="text"
          placeholder="e.g Laboratory clearance"
          name="name"
        />
      </div>
    </CardContent>
  );
};

export default RequirementFormContent;
