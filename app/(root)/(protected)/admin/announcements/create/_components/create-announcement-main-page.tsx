"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { AnnouncementTitleSchema } from "@/lib/yup-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";

import toast from "react-hot-toast";

import CreateAnnouncementHeader from "./create-announcement-header";
import CreateAnnouncementFooter from "./create-announcement-footer";
import CreateAnnouncementForm from "./create-announcement-form";
import { createAnnouncement } from "@/actions/client-actions/announcement-actions/create-announcement";

const CreateAnnouncementMainPage = () => {
  const router = useRouter();
  const methods = useForm({
    resolver: yupResolver(AnnouncementTitleSchema),
  });
  const { handleSubmit, formState } = methods;
  const { isSubmitting } = formState;

  const onSubmit = async (data: any) => {
    try {
      const response = await createAnnouncement(data);
      router.push(`/admin/announcements/${response.id}`);
      toast.success("Announcement created.");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className=" max-w-5xl mx-auto p-6 flex items-center justify-center mt-40 ">
      <div>
        <CreateAnnouncementHeader />
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 mt-8">
            <CreateAnnouncementForm />
            <CreateAnnouncementFooter isSubmitting={isSubmitting} />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default CreateAnnouncementMainPage;
