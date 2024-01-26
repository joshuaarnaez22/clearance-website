"use client";
import React from "react";

import { UserEmailSchema } from "@/lib/yup-schema";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { user } from "@/actions/client-actions/user";

import toast from "react-hot-toast";

import { Card } from "@/components/ui/card";
import UserFormHeader from "./user-form-header";
import UserFormContent from "./user-form-content";
import UserFormFooter from "./user-form-footer";

const UserForm = () => {
  const router = useRouter();
  const methods = useForm({
    resolver: yupResolver(UserEmailSchema),
  });
  const { handleSubmit, reset, formState } = methods;
  const { isSubmitting } = formState;

  const onSubmit = async ({ email }: any) => {
    console.log(email);

    // try {
    //   const userData = await user({ email });
    //   //   router.push(`/teacher/courses/${response.data.id}`);
    //   //   toast.success("Course created successfully");
    // } catch (error) {
    //   toast.error("Something went wrong");
    // } finally {
    //   reset();
    // }
  };

  return (
    <div className="mt-10">
      <Card className="p-6">
        <UserFormHeader />
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <UserFormContent />
            <UserFormFooter isSubmitting={isSubmitting} />
          </form>
        </FormProvider>
      </Card>
    </div>
  );
};

export default UserForm;
