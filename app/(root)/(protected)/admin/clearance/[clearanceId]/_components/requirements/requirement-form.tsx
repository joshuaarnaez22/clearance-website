"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, PlusCircle } from "lucide-react";
import { Requirement } from "@prisma/client";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ClearanceNameSchema } from "@/lib/yup-schema";
import {
  createClearance,
  createRequirement,
} from "@/actions/client-actions/clearance-actions/create-clearance";
import toast from "react-hot-toast";
import FormInput from "@/components/ui/form-input";
import { Card } from "@/components/ui/card";
import RequirementFormHeader from "./requirement-form-header";
import RequirementFormContent from "./requirement-form-content";
import RequirementFormFooter from "./requirement-form-footer";
import RequirementsList from "./requirements-list";

interface RequirementFormProps {
  id: string;
  requirements: Requirement[];
}
const RequirementForm = ({ id, requirements }: RequirementFormProps) => {
  const [create, setCreate] = useState(false);
  const router = useRouter();
  const methods = useForm({
    resolver: yupResolver(ClearanceNameSchema),
  });
  const { handleSubmit, formState } = methods;
  const { isSubmitting } = formState;

  const onSubmit = async (data: any) => {
    try {
      await createRequirement(data, id);
      setCreate(false);
      router.refresh();
      toast.success("Requirement created.");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <div className="flex flex-col  font-bold  mb-2 mt-4 items-end">
        <Button
          type="button"
          variant="outline"
          className="flex items-center justify-center font-bold"
          onClick={() => setCreate(!create)}
        >
          <div>
            {create ? (
              <h3> Cancel</h3>
            ) : (
              <div className="flex items-center justify-center">
                <PlusCircle className="h-4 w-4 mr-2" />
                <h3> Add a requirement</h3>
              </div>
            )}
          </div>
        </Button>
      </div>
      <Card>
        <div className="relative rounded-md p-4 ">
          {create ? (
            <div>
              <RequirementFormHeader />
              <FormProvider {...methods}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-8 mt-8"
                >
                  <RequirementFormContent />
                  <RequirementFormFooter isSubmitting={isSubmitting} />
                </form>
              </FormProvider>
            </div>
          ) : requirements && requirements.length === 0 ? (
            <div className="text-muted-foreground text-sm items-center flex justify-center ">
              No requirements
            </div>
          ) : (
            <div className=" flex flex-col justify-center items-center">
              {requirements.map((requirement) => (
                <RequirementsList
                  clearanceId={id}
                  requirementId={requirement.id}
                  key={requirement.id}
                  name={requirement.name!}
                />
              ))}
            </div>
          )}
        </div>
      </Card>
    </>
  );
};

export default RequirementForm;
