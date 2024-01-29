"use client";
import React, { useState } from "react";
import FileUpload from "@/components/shared/file-upload";

import { Card, CardContent } from "@/components/ui/card";
import FormInput from "@/components/ui/form-input";
import Textarea from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import toast from "react-hot-toast";
import { PlusCircle } from "lucide-react";

import { createAttachments } from "@/actions/client-actions/clearance-actions/create-attachments";
import { Attachment } from "@prisma/client";
import { useRouter } from "next/navigation";
import AttachmentList from "./attachment-list";
const RequirementContent = ({
  requirementId,
  attachments,
}: {
  attachments: Attachment[];
  requirementId: string;
}) => {
  const router = useRouter();
  const [addAttachments, setAddAttachments] = useState(false);

  const onSubmit = async (response: any) => {
    try {
      const attachments = response.map((res: any) => ({
        name: res.name,
        url: res.url,
        requirmentId: requirementId,
      }));

      await createAttachments(attachments);
      setAddAttachments(false);
      toast.success("Attachments added");
      router.refresh();
    } catch (error) {}
  };
  return (
    <CardContent>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className=" space-y-4">
          <div className="flex flex-col space-y-2">
            <p className="text-md text-slate-500 font-medium">Name</p>
            <FormInput
              type="text"
              placeholder="e.g School clearance: ID, fees, completed forms, and signatures."
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

        <div className="flex flex-col space-y-2">
          <div>
            <div className="flex flex-col  font-bold mt-[-12px] mb-1 items-end">
              <Button
                type="button"
                variant="outline"
                className="flex items-center justify-center font-bold"
                onClick={() => setAddAttachments(!addAttachments)}
              >
                {addAttachments ? (
                  <h3> Cancel</h3>
                ) : (
                  <div className="flex items-center justify-center">
                    <PlusCircle className="h-4 w-4 mr-2" />
                    <h3> Add attachments</h3>
                  </div>
                )}
              </Button>
            </div>
          </div>
          {addAttachments ? (
            <FileUpload
              endpoint="requirementsAttachments"
              onChange={(res) => {
                if (res) {
                  onSubmit(res);
                }
              }}
            />
          ) : (
            <Card className="flex flex-col items-center justify-center py-4">
              {attachments.length !== 0 ? (
                <div>
                  {attachments.map((attachment) => (
                    <AttachmentList
                      url={attachment.url!}
                      name={attachment.name}
                      key={attachment.id}
                    />
                  ))}
                </div>
              ) : (
                <div className="h-[200px] flex justify-center items-center">
                  <p className="text-sm font-semibold text-muted-foreground">
                    No attachment
                  </p>
                </div>
              )}
            </Card>
          )}
        </div>
      </div>
    </CardContent>
  );
};

export default RequirementContent;
