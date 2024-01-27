import { checkSession } from "@/actions/check-session";
import { redirect } from "next/navigation";

const Requirements = async ({
  params,
}: {
  params: { clearanceId: string };
}) => {
  const userId = await checkSession();

  if (!userId) {
    return redirect("/");
  }
  return redirect(`/admin/clearance/${params.clearanceId}`);
};

export default Requirements;
