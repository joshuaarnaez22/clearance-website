import { getAnnouncementById } from "@/actions/server-actions/announcement-actions/get-announcement-by-id";
import React from "react";
import AnnouncementForm from "./_components/announcement-form";
import { checkSession } from "@/actions/check-session";
import { redirect } from "next/navigation";

const AnnouncementIdPage = async ({
  params,
}: {
  params: { announcementId: string };
}) => {
  const userId = await checkSession();

  if (!userId) {
    return redirect("/");
  }
  const announcement = await getAnnouncementById(params.announcementId);
  if (!announcement) {
    return redirect("/");
  }
  return (
    <div className="p-6">
      <AnnouncementForm
        title={announcement.title}
        announcementId={announcement.id}
        url={announcement.url ?? ""}
      />
    </div>
  );
};

export default AnnouncementIdPage;
