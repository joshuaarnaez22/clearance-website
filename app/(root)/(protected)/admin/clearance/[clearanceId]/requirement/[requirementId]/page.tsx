import React from "react";
import GoBack from "@/components/shared/go-back";
import RequirementForm from "./_components/requirement-form";
import { getRequirementById } from "@/actions/server-actions/clearance-actions/get-clearance-by-id";
import { checkSession } from "@/actions/check-session";
import { redirect } from "next/navigation";

const RequirementPage = async ({
  params,
}: {
  params: { clearanceId: string; requirementId: string };
}) => {
  const userId = await checkSession();

  if (!userId) {
    return redirect("/");
  }
  const requirement = await getRequirementById(
    params.clearanceId,
    params.requirementId
  );
  if (!requirement) {
    return redirect("/");
  }

  return (
    <div className="p-6">
      <GoBack url={`/admin/clearance/${params.clearanceId}`} />
      <RequirementForm
        requirementId={params.requirementId}
        requirement={requirement}
      />
    </div>
  );
};

export default RequirementPage;
