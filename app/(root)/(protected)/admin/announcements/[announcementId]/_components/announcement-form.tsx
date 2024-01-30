"use client";
import React from "react";

import { AnnouncementSchema } from "@/lib/yup-schema";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import toast from "react-hot-toast";

import { Card } from "@/components/ui/card";

import AnnouncementFormHeader from "./announcement-form-header";
import AnnouncementFormContent from "./announcement-form-content";
import AnnouncementFormFooter from "./announcement-form-footer";
import { updateAnnouncement } from "@/actions/client-actions/announcement-actions/create-announcement";

const AnnouncementForm = ({
  title,
  announcementId,
  url,
}: {
  url?: string;
  title: string;
  announcementId: string;
}) => {
  const router = useRouter();
  const methods = useForm({
    resolver: yupResolver(AnnouncementSchema),
    defaultValues: {
      title,
    },
  });
  const { handleSubmit, formState } = methods;
  const { isSubmitting } = formState;

  const onSubmit = async (data: any) => {
    try {
      await updateAnnouncement({
        id: announcementId,
        values: {
          ...data,
        },
      });
      toast.success("Changes saved");
      router.push("/admin/announcements");
    } catch (error: any) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="mt-10">
      <Card className="p-6">
        <AnnouncementFormHeader />
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <AnnouncementFormContent
              announcementId={announcementId}
              url={url}
            />
            <AnnouncementFormFooter isSubmitting={isSubmitting} />
          </form>
        </FormProvider>
      </Card>
    </div>
  );
};

export default AnnouncementForm;
