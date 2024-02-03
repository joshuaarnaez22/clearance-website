import React from "react";
import UsersTablePage from "./_components/users-table/page";
import { checkSession } from "@/actions/check-session";
import { redirect } from "next/navigation";
import AnnouncenentTablePage from "./_components/users-table/page";

const AdminAnnouncementPage = async () => {
  const userId = await checkSession();

  if (!userId) {
    return redirect("/");
  }
  return (
    <div className="p-6 ">
      <AnnouncenentTablePage />
    </div>
  );
};

export default AdminAnnouncementPage;
