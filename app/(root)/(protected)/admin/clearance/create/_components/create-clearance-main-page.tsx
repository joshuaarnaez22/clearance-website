"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { ClearanceNameSchema } from "@/lib/yup-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";

import toast from "react-hot-toast";
import { createClearance } from "@/actions/client-actions/clearance-actions/create-clearance";
import CreateClearanceHeader from "./create-clearance-header";
import CreateClearanceForm from "./create-clearance-form";
import CreateClearanceFooter from "./create-clearance-footer";

const CreateClearanceMainPage = () => {
  const router = useRouter();
  const methods = useForm({
    resolver: yupResolver(ClearanceNameSchema),
  });
  const { handleSubmit, reset, formState } = methods;
  const { isSubmitting } = formState;

  const onSubmit = async (data: any) => {
    try {
      const response = await createClearance(data);
      router.push(`/admin/clearance/${response.id}`);
      toast.success("Clearance created.");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className=" max-w-5xl mx-auto p-6 flex items-center justify-center mt-40 ">
      <div>
        <CreateClearanceHeader />
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 mt-8">
            <CreateClearanceForm />
            <CreateClearanceFooter isSubmitting={isSubmitting} />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default CreateClearanceMainPage;
