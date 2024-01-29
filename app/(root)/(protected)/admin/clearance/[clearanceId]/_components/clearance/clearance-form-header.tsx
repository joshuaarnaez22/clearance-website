import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const ClearanceHeader = () => {
  return (
    <CardHeader>
      <CardTitle className="text-2xl font-medium">Clearance Setup</CardTitle>
      <CardDescription>Customize settings for Clearance Setup.</CardDescription>
    </CardHeader>
  );
};

export default ClearanceHeader;
