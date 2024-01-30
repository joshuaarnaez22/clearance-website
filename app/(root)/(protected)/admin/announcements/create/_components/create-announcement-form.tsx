import FormInput from "@/components/ui/form-input";
import React from "react";

const CreateAnnouncementForm = () => {
  return (
    <div className="space-y-2">
      <FormInput
        type="text"
        placeholder="e.g School Announcement: Details to follow!"
        name="title"
      />
      <p className="text-md text-slate-500">
        What will you do in this announcement.
      </p>
    </div>
  );
};

export default CreateAnnouncementForm;
