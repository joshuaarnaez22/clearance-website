import { getAnnouncementById } from "@/actions/server-actions/announcement-actions/get-announcement-by-id";
import React from "react";
import AnnouncementForm from "./_components/announcement-form";
import { checkSession } from "@/actions/check-session";
import { redirect } from "next/navigation";
import GoBack from "@/components/shared/go-back";

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
      <GoBack url="/admin/announcements" />
      <AnnouncementForm
        title={announcement.title}
        announcementId={announcement.id}
        url={announcement.url ?? ""}
        content={announcement.content ?? ""}
        location={announcement.location ?? ""}
        action={announcement.action ?? ""}
        from={announcement.from ?? null}
        to={announcement.to ?? null}
      />
    </div>
  );
};

export default AnnouncementIdPage;
