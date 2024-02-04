import React, { useEffect } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangePasswordSchema } from "@/lib/yup-schema";
import FormInput from "../ui/form-input";
import { Button } from "../ui/button";

const ChangePassword = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const methods = useForm({
    resolver: yupResolver(ChangePasswordSchema),
  });
  const { handleSubmit, formState, clearErrors, reset } = methods;
  const { isSubmitting } = formState;
  const onSubmit = async (e: any) => {
    console.log(e);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Change password</AlertDialogTitle>
          <AlertDialogDescription>
            Securely update your password: verify old, set new. Quick and easy!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div className="flex flex-col space-y-2">
              <p className="text-md text-slate-500 font-medium">Old password</p>
              <FormInput
                type="text"
                placeholder="********"
                name="oldPassword"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <p className="text-md text-slate-500 font-medium">New password</p>
              <FormInput
                type="text"
                placeholder="********"
                name="newPassword"
              />
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => reset()}>
                Cancel
              </AlertDialogCancel>
              <Button type="submit" disabled={isSubmitting}>
                Continue
              </Button>
            </AlertDialogFooter>
          </form>
        </FormProvider>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ChangePassword;
