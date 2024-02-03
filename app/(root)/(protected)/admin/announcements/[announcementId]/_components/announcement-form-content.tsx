"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";

import DateRangePicker from "@/components/shared/date-range-picker";
import FileUpload from "@/components/shared/file-upload";
import FormInput from "@/components/ui/form-input";
import { ImageIcon, PlusCircle } from "lucide-react";
import { updateAnnouncement } from "@/actions/client-actions/announcement-actions/create-announcement";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { DateRange } from "react-day-picker";
import { useFormContext } from "react-hook-form";

const AnnouncementFormContent = ({
  announcementId,
  url,
  defaultValues,
}: {
  url?: string;
  announcementId: string;
  defaultValues?: DateRange | null;
}) => {
  const router = useRouter();
  const { setValue } = useFormContext();
  const [addThumbnail, setAddThumbnail] = useState(false);

  const dateRange = (date: DateRange) => {
    if (date.from) {
      setValue("from", date.from, { shouldValidate: true });
    }
    if (date.to) {
      setValue("to", date.to, { shouldValidate: true });
    } else {
      setValue("to", null);
    }
  };

  const onSubmit = async (res: any) => {
    await updateAnnouncement({
      id: announcementId,
      values: {
        url: res[0].url,
      },
    });
    setAddThumbnail(false);
    toast.success("Thumbnail added");
    router.refresh();
  };

  return (
    <CardContent>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <p className="text-md text-slate-500 font-medium">Title</p>
          <FormInput
            type="text"
            placeholder="e.g School Announcement: Details to follow!"
            name="title"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-md text-slate-500 font-medium">Content</p>
          <FormInput
            type="text"
            placeholder="e.g Check website for details."
            name="content"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-md text-slate-500 font-medium">Location</p>
          <FormInput
            type="text"
            placeholder="e.g  New room, third floor."
            name="location"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-md text-slate-500 font-medium">Action</p>
          <FormInput
            type="text"
            placeholder="e.g Join event tomorrow, auditorium"
            name="action"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-md text-slate-500 font-medium">Date range</p>
          <DateRangePicker
            dateRange={dateRange}
            name="to"
            defaultValue={defaultValues}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between ">
            <p className="text-md text-slate-500 font-medium">Thumbnail</p>
            <Button
              type="button"
              variant="outline"
              className="flex items-center justify-center font-bold"
              onClick={() => setAddThumbnail(!addThumbnail)}
            >
              {addThumbnail ? (
                <h3>Cancel</h3>
              ) : (
                <div className="flex items-center justify-center">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  {url ? "Change thumbnail" : "Add thumbnail"}
                </div>
              )}
            </Button>
          </div>
          {!addThumbnail &&
            (!url ? (
              <div className="flex items-center justify-center h-60 bg-slate-200 rounded-md">
                <ImageIcon className="h-10 w-10 text-slate-500" />
              </div>
            ) : (
              <div className="relative aspect-video mt-2">
                <Image
                  alt="Image upload"
                  fill
                  className=" object-cover rounded-md"
                  src={url}
                />
              </div>
            ))}

          {addThumbnail && (
            <FileUpload
              endpoint="announcementThumbnail"
              onChange={(res) => {
                if (res) {
                  onSubmit(res);
                }
              }}
            />
          )}
        </div>
      </div>
    </CardContent>
  );
};

export default AnnouncementFormContent;
