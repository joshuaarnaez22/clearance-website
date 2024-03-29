"use client";
import { Badge } from "@/components/ui/badge";
import { CardContent } from "@/components/ui/card";
import { Combobox } from "@/components/ui/combobox";
import FormInput from "@/components/ui/form-input";
import { passwordGenerate, roleArray } from "@/lib/utils";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

const UserFormContent = () => {
  const [role, setRole] = useState("");
  const { setValue } = useFormContext();

  const selectedChange = (value: string, label: string) => {
    setValue("role", value, { shouldValidate: true });
    setRole(label);
  };
  const generateRandomPassword = () => {
    const randomPassword = passwordGenerate(8);
    setValue("password", randomPassword, { shouldValidate: true });
  };

  return (
    <CardContent>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <p className="text-md text-slate-500 font-medium">Email</p>
          <FormInput type="text" placeholder="example@email.com" name="email" />
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-md text-slate-500 font-medium">First name</p>
          <FormInput type="text" placeholder="John" name="firstname" />
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-md text-slate-500 font-medium">Last name</p>
          <FormInput type="text" placeholder="Doe" name="lastname" />
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-md text-slate-500 font-medium">Role</p>
          <Combobox
            name="role"
            options={roleArray}
            value={role}
            onChange={selectedChange}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-md text-slate-500 font-medium">Username</p>
          <FormInput type="text" placeholder="Doe" name="username" />
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <p className="text-md text-slate-500 font-medium">Password</p>
            <Badge
              onClick={generateRandomPassword}
              className="hover:cursor-pointer"
            >
              Random generated password
            </Badge>
          </div>
          <FormInput type="text" placeholder="Password" name="password" />
        </div>
      </div>
    </CardContent>
  );
};

export default UserFormContent;
