import FormInput from "@/components/ui/form-input";
import React from "react";

const CreateRequirementForm = () => {
  return (
    <div className="space-y-2">
      <FormInput
        type="text"
        placeholder="e.g Submit ID, proof of address, and payment for clearance"
        name="name"
      />
      <p className="text-md text-slate-500">
        What will you do in this Requirement.
      </p>
    </div>
  );
};

export default CreateRequirementForm;
