import React from "react";
import UsersTablePage from "./_components/users-table/page";
import { Button } from "@/components/ui/button";

const AdminUsersPage = () => {
  return (
    <div className="p-6">
      <UsersTablePage />
    </div>
  );
};

export default AdminUsersPage;
