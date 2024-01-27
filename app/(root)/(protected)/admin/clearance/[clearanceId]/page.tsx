import { getClearanceById } from "@/actions/server-actions/clearance-actions/get-clearance-by-id";
import React from "react";
import ClearanceForm from "./_components/clearance-form";
import { checkSession } from "@/actions/check-session";
import { redirect } from "next/navigation";
import GoBack from "@/components/shared/go-back";

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
    <div className="p-6">
      <GoBack url={`/admin/clearance`} />
      <ClearanceForm
        id={clearance.id}
        name={clearance?.name}
        requirements={clearance.requirements}
      />
    </div>
  );
};

export default ClearanceIdPage;
