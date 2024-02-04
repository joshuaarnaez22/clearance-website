import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const RequirementFormHeader = () => {
  return (
    <CardHeader>
      <CardTitle className="text-2xl font-medium">Requirement Setup</CardTitle>
      <CardDescription>
        Customize settings for requirement Setup.
      </CardDescription>
    </CardHeader>
  );
};

export default RequirementFormHeader;
