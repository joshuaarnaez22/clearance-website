"use client";

import React from "react";

import { UserEmailSchema } from "@/lib/yup-schema";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import toast from "react-hot-toast";

import { Card } from "@/components/ui/card";
import UserFormHeader from "./user-form-header";
import UserFormContent from "./user-form-content";
import UserFormFooter from "./user-form-footer";
import { passwordGenerate } from "@/lib/utils";
import { createUser } from "@/actions/client-actions/user-actions/create-user";

const UserForm = () => {
  const router = useRouter();
  const methods = useForm({
    resolver: yupResolver(UserEmailSchema),
    defaultValues: {
      password: passwordGenerate(8),
    },
  });
  const { handleSubmit, formState } = methods;
  const { isSubmitting } = formState;

  const onSubmit = async (data: any) => {
    try {
      await createUser(data);
      toast.success("User created");
      router.push("/admin/users");
    } catch (error: any) {
      if (error.response.status === 409) {
        toast.error(error.response.data);
      } else {
        toast.error("Something went wrong");
      }
    }
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
