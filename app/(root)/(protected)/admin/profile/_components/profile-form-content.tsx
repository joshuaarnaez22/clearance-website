"use client";
import { CardContent } from "@/components/ui/card";
import FormInput from "@/components/ui/form-input";
import React from "react";

const ProfileFormContent = () => {
  return (
    <CardContent>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <p className="text-md text-slate-500 font-medium">Email</p>
          <FormInput type="text" placeholder="example@email.com" name="email" />
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-md text-slate-500 font-medium">First name</p>
          <FormInput type="text" placeholder="John" name="profile.firstname" />
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-md text-slate-500 font-medium">Last name</p>
          <FormInput type="text" placeholder="Doe" name="profile.lastname" />
        </div>

        <div className="flex flex-col space-y-2">
          <p className="text-md text-slate-500 font-medium">Username</p>
          <FormInput type="text" placeholder="Doe" name="username" />
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-md text-slate-500 font-medium">Address</p>
          <FormInput type="text" placeholder="Doe" name="profile.address" />
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-md text-slate-500 font-medium">Mobile Number</p>
          <FormInput
            type="text"
            placeholder="Doe"
            name="profile.mobilenumber"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-md text-slate-500 font-medium">Gender</p>
          <FormInput type="text" placeholder="Doe" name="profile.gender" />
        </div>
      </div>
    </CardContent>
  );
};

export default ProfileFormContent;
