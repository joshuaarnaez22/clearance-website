import { columns } from "./columns";
import { DataTable } from "./data-table";
import { checkSession } from "@/actions/check-session";
import { redirect } from "next/navigation";
import { getAllUser } from "@/actions/server-actions/user-actions/get-all-users";

const ClearanceTablePage = async () => {
  const userId = await checkSession();

  if (!userId) {
    return redirect("/");
  }

  const users = await getAllUser();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={users} />
    </div>
  );
};

export default ClearanceTablePage;
