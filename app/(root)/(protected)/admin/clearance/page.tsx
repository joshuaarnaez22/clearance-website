import React from "react";
import ClearanceTablePage from "./_components/clearance-table/page";
import { checkSession } from "@/actions/check-session";
import { redirect } from "next/navigation";

const AdminClearancePage = async () => {
  const userId = await checkSession();

  if (!userId) {
    return redirect("/");
  }
  return <ClearanceTablePage />;
};

export default AdminClearancePage;
