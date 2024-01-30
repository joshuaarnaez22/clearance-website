import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const AnnouncementFormHeader = () => {
  return (
    <CardHeader>
      <CardTitle className="text-2xl font-medium">Announcement Setup</CardTitle>
      <CardDescription>
        Customize settings for a seamless Announcement Setup.
      </CardDescription>
    </CardHeader>
  );
};

export default AnnouncementFormHeader;
