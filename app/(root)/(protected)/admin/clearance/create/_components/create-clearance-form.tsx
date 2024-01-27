import FormInput from "@/components/ui/form-input";
import React from "react";

const CreateClearanceForm = () => {
  return (
    <div className="space-y-2">
      <FormInput
        type="text"
        placeholder="e.g Laboratory clearance"
        name="name"
      />
      <p className="text-md text-slate-500">
        What will you do in this clearance.
      </p>
    </div>
  );
};

export default CreateClearanceForm;
