"use client";
import React, { useEffect, useState } from "react";

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
import { DateRange } from "react-day-picker";

import _ from "lodash";

const AnnouncementForm = ({
  title,
  announcementId,
  url,
  content,
  location,
  action,
  from,
  to,
}: {
  url?: string;
  title: string;
  announcementId: string;
  content: string;
  location: string;
  action: string;
  from: Date | null;
  to: Date | null;
}) => {
  const router = useRouter();
  const [defaultValues, setDefaultValues] = useState<DateRange | null>();
  const methods = useForm({
    resolver: yupResolver(AnnouncementSchema),
    defaultValues: {
      title,
      content,
      location,
      action,
    },
  });
  const { handleSubmit, formState } = methods;
  const { isSubmitting } = formState;

  const onSubmit = async (data: any) => {
    try {
      const filteredData = _.pickBy(
        data,
        (value) => !(_.isString(value) && _.isEmpty(value))
      );

      await updateAnnouncement({
        id: announcementId,
        values: {
          ...filteredData,
        },
      });
      toast.success("Changes saved");
      router.push("/admin/announcements");
      router.refresh();
    } catch (error: any) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    if (from && to) {
      setDefaultValues({ from, to });
    }
  }, [from, to]);

  return (
    <div className="mt-10">
      <Card className="p-6">
        <AnnouncementFormHeader />
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <AnnouncementFormContent
              announcementId={announcementId}
              url={url}
              defaultValues={defaultValues}
            />
            <AnnouncementFormFooter isSubmitting={isSubmitting} />
          </form>
        </FormProvider>
      </Card>
    </div>
  );
};

export default AnnouncementForm;
