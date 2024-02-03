import { columns } from "./columns";
import { DataTable } from "./data-table";
import { checkSession } from "@/actions/check-session";
import { redirect } from "next/navigation";
import { getAllAnnouncements } from "@/actions/server-actions/announcement-actions/get-all-announcements";

const AnnouncenentTablePage = async () => {
  const userId = await checkSession();

  if (!userId) {
    return redirect("/");
  }

  const announcements = await getAllAnnouncements();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={announcements} />
    </div>
  );
};

export default AnnouncenentTablePage;
