import React from "react";
import CreateAnnouncementMainPage from "./_components/create-announcement-main-page";
import { checkSession } from "@/actions/check-session";
import { redirect } from "next/navigation";

const CreateClearancePage = async () => {
  const userId = await checkSession();

  if (!userId) {
    return redirect("/");
  }
  return <CreateAnnouncementMainPage />;
};

export default CreateClearancePage;
