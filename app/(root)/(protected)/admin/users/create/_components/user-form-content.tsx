"use client";
import { CardContent } from "@/components/ui/card";
import { Combobox } from "@/components/ui/combobox";
import FormInput from "@/components/ui/form-input";
import { roleArray } from "@/lib/utils";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

const UserFormContent = () => {
  const [role, setRole] = useState("");
  const { setValue } = useFormContext();

  const selectedChange = (value: string, id: string) => {
    setValue("role", value, { shouldValidate: true });
    setRole(value);
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
          <FormInput type="text" placeholder="John" name="fname" />
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-md text-slate-500 font-medium">Last name</p>
          <FormInput type="text" placeholder="Doe" name="lname" />
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-md text-slate-500 font-medium">Last name</p>
          <Combobox
            name="role"
            options={roleArray}
            value={role}
            onChange={selectedChange}
          />
        </div>
      </div>
    </CardContent>
  );
};

export default UserFormContent;
