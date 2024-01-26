import Logo from "@/components/shared/logo";
import React from "react";
import AdminSidebarRoutes from "./sidebar-routes";

const AdminSidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-hidden bg-white shadow-sm">
      <div className="p-6">
        <Logo />
      </div>
      <div className="w-full flex flex-col">
        <AdminSidebarRoutes />
      </div>
    </div>
  );
};

export default AdminSidebar;
