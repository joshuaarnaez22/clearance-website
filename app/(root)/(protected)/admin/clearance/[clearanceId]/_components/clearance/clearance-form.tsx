"use client";
import { Card } from "@/components/ui/card";
import { ClearanceProps } from "@/types/types";
import React from "react";
import ClearanceHeader from "./clearance-form-header";
import ClearanceContent from "./clearance-content";
import ClearanceFooter from "./clearance-form-footer";

import { ClearanceSchema } from "@/lib/yup-schema";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateClearance } from "@/actions/client-actions/clearance-actions/create-clearance";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const ClearanceForm = ({ id, name, description }: ClearanceProps) => {
  const router = useRouter();
  const clearanceMethods = useForm({
    resolver: yupResolver(ClearanceSchema),
    defaultValues: {
      name,
      description: description || "",
    },
  });
  const { handleSubmit, formState } = clearanceMethods;
  const { isSubmitting } = formState;

  const onSubmit = async (data: any) => {
    try {
      await updateClearance(id, data);
      toast.success("Clearance updated");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };
  return (
    <div>
      <Card className="p-6">
        <ClearanceHeader />
        <FormProvider {...clearanceMethods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ClearanceContent />
            <ClearanceFooter isSubmitting={isSubmitting} />
          </form>
        </FormProvider>
      </Card>
    </div>
  );
};

export default ClearanceForm;
