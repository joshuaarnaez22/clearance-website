import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const UserFormHeader = () => {
  return (
    <CardHeader>
      <CardTitle className="text-2xl font-medium">User Setup</CardTitle>
      <CardDescription>
        Customize settings for a seamless User Setup.
      </CardDescription>
    </CardHeader>
  );
};

export default UserFormHeader;
