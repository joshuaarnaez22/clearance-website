import React from "react";
import UsersTablePage from "./_components/users-table/page";
import { checkSession } from "@/actions/check-session";
import { redirect } from "next/navigation";

const AdminAnnouncementPage = async () => {
  const userId = await checkSession();

  if (!userId) {
    return redirect("/");
  }
  return (
    <div className="p-6 ">
      <UsersTablePage />
    </div>
  );
};

export default AdminAnnouncementPage;
