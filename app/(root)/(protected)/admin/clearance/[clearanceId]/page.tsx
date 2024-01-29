import { getClearanceById } from "@/actions/server-actions/clearance-actions/get-clearance-by-id";
import React from "react";
import { checkSession } from "@/actions/check-session";
import { redirect } from "next/navigation";
import GoBack from "@/components/shared/go-back";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ClearanceForm from "./_components/clearance/clearance-form";
import RequirementForm from "./_components/requirements/requirement-form";

export const revalidate = 0;
const ClearanceIdPage = async ({
  params,
}: {
  params: { clearanceId: string };
}) => {
  const userId = await checkSession();

  if (!userId) {
    return redirect("/");
  }
  const clearance = await getClearanceById(params.clearanceId);

  if (!clearance) {
    return redirect("/");
  }
  return (
    <div className="p-6 w-full">
      <GoBack url={`/admin/clearance`} />
      <Tabs defaultValue="clearance" className="mt-10">
        <div className="flex items-center justify-center">
          <TabsList className="w-full lg:w-[350px]">
            <TabsTrigger value="clearance" className="w-full">
              Clearance
            </TabsTrigger>
            <TabsTrigger value="requirements" className="w-full">
              <div className="flex items-center justify-center gap-x-2">
                Requirements
                <p className=" font-medium text-xs text-muted-foreground">
                  {clearance.requirements.length}
                </p>
              </div>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="clearance">
          <ClearanceForm
            id={clearance.id}
            name={clearance?.name}
            description={clearance.description ?? ""}
          />
        </TabsContent>
        <TabsContent value="requirements">
          <RequirementForm
            requirements={clearance.requirements}
            id={clearance.id}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClearanceIdPage;
