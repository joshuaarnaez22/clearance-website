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

const ClearanceForm = ({ id, requirements, name }: ClearanceProps) => {
  const methods = useForm({
    resolver: yupResolver(ClearanceSchema),
    defaultValues: {
      name,
    },
  });
  const { handleSubmit, reset, formState } = methods;
  const { isSubmitting } = formState;

  const onSubmit = () => {};
  return (
    <div className="mt-10">
      <Card className="p-6">
        <ClearanceHeader />
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ClearanceContent requirements={requirements} id={id} />
            <ClearanceFooter isSubmitting={isSubmitting} />
          </form>
        </FormProvider>
      </Card>
    </div>
  );
};

export default ClearanceForm;
