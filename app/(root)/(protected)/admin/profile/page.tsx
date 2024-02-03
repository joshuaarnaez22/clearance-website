import { checkSession } from "@/actions/check-session";
import { getUserById } from "@/actions/client-actions/user-actions/get-userId";
import { getUserByIdServer } from "@/actions/server-actions/user-actions/get-user-by-id";
import { redirect } from "next/navigation";
import React from "react";

const AdminProfilePage = async () => {
  const userId = await checkSession();

  if (!userId) {
    return redirect("/");
  }

  const user = await getUserByIdServer(userId);
  console.log(user);

  return <div>ProfilePage</div>;
};

export default AdminProfilePage;
