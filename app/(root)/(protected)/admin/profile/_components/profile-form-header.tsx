import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const ProfileFormHeader = () => {
  return (
    <CardHeader>
      <CardTitle className="text-2xl font-medium">Profile Setup</CardTitle>
      <CardDescription>
        Customize settings for a seamless Profile Setup.
      </CardDescription>
    </CardHeader>
  );
};

export default ProfileFormHeader;
