"use client";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import FormInput from "@/components/ui/form-input";
import Textarea from "@/components/ui/textarea";
import { Requirement } from "@prisma/client";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ClearanceContentProps {
  id: string;
  requirements: Requirement[];
}
const ClearanceContent = ({ requirements, id }: ClearanceContentProps) => {
  return (
    <CardContent>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
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
        <div>
          <div className="flex justify-between items-center font-bold mt-[-12px] mb-1 ">
            {" "}
            <h3>Requirements</h3>
            <Link href={`/admin/clearance/${id}/requirements/create`}>
              <Button
                variant="ghost"
                className="flex items-center justify-center font-bold"
              >
                <PlusCircle className="h-4 w-4 mr-2" />
                <h3> Add a requirement</h3>
              </Button>
            </Link>
          </div>
          <div className="relative bg-slate-100 rounded-md p-4 min-h-[150px]">
            {requirements && requirements.length === 0 ? (
              <div className="min-h-[150px] text-muted-foreground text-sm items-center flex justify-center ">
                No requirements
              </div>
            ) : (
              <div>Todo</div>
            )}
          </div>
        </div>
      </div>
    </CardContent>
  );
};

export default ClearanceContent;
