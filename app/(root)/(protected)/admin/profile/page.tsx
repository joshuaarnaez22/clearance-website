import { checkSession } from "@/actions/check-session";
import { getUserByIdServer } from "@/actions/server-actions/user-actions/get-user-by-id";
import { redirect } from "next/navigation";
import React from "react";
import ProfileForm from "./_components/profile-form";

const AdminProfilePage = async () => {
  const userId = await checkSession();

  if (!userId) {
    return redirect("/");
  }

  const user = await getUserByIdServer(userId);
  if (!user) {
    return redirect("/");
  }

  return (
    <div className="p-6 ">
      <ProfileForm
        id={user.id}
        email={user.email}
        username={user.username}
        profile={user.profile}
      />
    </div>
  );
};

export default AdminProfilePage;
