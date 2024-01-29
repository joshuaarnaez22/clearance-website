"use client";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import FormInput from "@/components/ui/form-input";
import Textarea from "@/components/ui/textarea";
import { Requirement } from "@prisma/client";
import { divide } from "lodash";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ClearanceContent = () => {
  return (
    <CardContent>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <p className="text-md text-slate-500 font-medium">Clearance name</p>
          <FormInput
            type="text"
            placeholder="e.g Laboratory clearance"
            name="name"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-md text-slate-500 font-medium">Description</p>
          <Textarea
            placeholder="e.g Swift clearance for seamless compliance."
            name="description"
          />
        </div>
      </div>
    </CardContent>
  );
};

export default ClearanceContent;
