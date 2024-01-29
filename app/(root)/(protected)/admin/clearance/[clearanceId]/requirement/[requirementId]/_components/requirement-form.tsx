"use client";
import React from "react";

import { Card } from "@/components/ui/card";
import RequirementHeader from "./requirement-form-header";
import RequirementContent from "./requirement-content";
import RequirementFooter from "./requirment-form-footer";

import { RequirementSchema } from "@/lib/yup-schema";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Requirements } from "@/types/types";

const RequirementForm = ({ requirementId, requirement }: Requirements) => {
  const methods = useForm({
    resolver: yupResolver(RequirementSchema),
    defaultValues: {
      name: requirement.name || "",
      description: requirement.description || "",
    },
  });
  const { handleSubmit, formState } = methods;
  const { isSubmitting } = formState;

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="mt-10">
      <Card className="p-6">
        <RequirementHeader />
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <RequirementContent
              requirementId={requirementId}
              attachments={requirement.attachments}
            />
            <RequirementFooter isSubmitting={isSubmitting} />
          </form>
        </FormProvider>
      </Card>
    </div>
  );
};

export default RequirementForm;
