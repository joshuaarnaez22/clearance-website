"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { RequirementNameSchema } from "@/lib/yup-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";

import toast from "react-hot-toast";
import { createRequirement } from "@/actions/client-actions/clearance-actions/create-clearance";
import CreateRequirementHeader from "./create-requirement-header";
import CreateRequirementForm from "./create-requirement-form";
import CreateRequirementFooter from "./create-requirement-footer";

const CreateRequirementMainPage = ({ id }: { id: string }) => {
  const router = useRouter();
  const methods = useForm({
    resolver: yupResolver(RequirementNameSchema),
  });
  const { handleSubmit, formState } = methods;
  const { isSubmitting } = formState;

  const onSubmit = async (data: any) => {
    try {
      const response = await createRequirement(data, id);
      router.push(`/admin/clearance/${id}/requirements/${response.id}`);
      router.refresh();
      toast.success("Requirement created.");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className=" max-w-5xl mx-auto p-6 flex items-center justify-center mt-40 ">
      <div>
        <CreateRequirementHeader />
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 mt-8">
            <CreateRequirementForm />
            <CreateRequirementFooter isSubmitting={isSubmitting} id={id} />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default CreateRequirementMainPage;
