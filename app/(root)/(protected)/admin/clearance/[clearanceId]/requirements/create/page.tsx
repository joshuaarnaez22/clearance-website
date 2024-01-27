import { checkSession } from "@/actions/check-session";
import CreateRequirementMainPage from "./_components/create-requirement-main-page";
import { redirect } from "next/dist/client/components/navigation";

const CreateClearancePage = async ({
  params,
}: {
  params: { clearanceId: string };
}) => {
  const userId = await checkSession();

  if (!userId) {
    return redirect("/");
  }
  return <CreateRequirementMainPage id={params.clearanceId} />;
};

export default CreateClearancePage;
