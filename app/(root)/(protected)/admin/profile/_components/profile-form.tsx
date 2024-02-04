"use client";

import React from "react";

import { UserEmailSchema, UserProfileSchema } from "@/lib/yup-schema";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import toast from "react-hot-toast";

import { Card } from "@/components/ui/card";
import UserFormContent from "./profile-form-content";
import UserFormFooter from "./user-form-footer";
import { passwordGenerate } from "@/lib/utils";
import { createUser } from "@/actions/client-actions/user-actions/create-user";
import ProfileFormHeader from "./profile-form-header";
import ProfileFormContent from "./profile-form-content";
import { Profile } from "@prisma/client";
import _ from "lodash";

interface ProfileFormProps {
  id: string;
  email: string;
  username: string;
  profile: {
    firstname: string | null;
    lastname: string | null;
    gender: string | null;
    address: string | null;
    img: string | null;
    mobilenumber: string | null;
  } | null;
}

const ProfileForm = ({ id, email, username, profile }: ProfileFormProps) => {
  const router = useRouter();
  const methods = useForm({
    resolver: yupResolver(UserProfileSchema),
    defaultValues: {
      username,
      email,
      profile: profile || null,
    },
  });
  const { handleSubmit, formState } = methods;
  const { isSubmitting } = formState;

  const onSubmit = async (data: any) => {
    const filteredProfile = _.omitBy(data.profile, _.isNull);

    const userProfileObj = {
      username: data.username,
      email: data.email,
      profile: _.isEmpty(filteredProfile) ? null : filteredProfile,
    };

    console.log(userProfileObj);

    // try {
    //   await createUser(data);
    //   toast.success("User created");
    //   router.refresh();
    //   router.push("/admin/users");
    // } catch (error: any) {
    //   if (error.response.status === 409) {
    //     toast.error(error.response.data);
    //   } else {
    //     toast.error("Something went wrong");
    //   }
    // }
  };

  return (
    <div className="mt-10">
      <Card className="p-6">
        <ProfileFormHeader />
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ProfileFormContent />
            <UserFormFooter isSubmitting={isSubmitting} />
          </form>
        </FormProvider>
      </Card>
    </div>
  );
};

export default ProfileForm;
