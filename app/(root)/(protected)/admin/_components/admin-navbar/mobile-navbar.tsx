import React from "react";
import MobileNavbarSidebar from "./mobile-navbar-sidebar";
import AvatarMenu from "@/components/shared/avatar-menu";

const AdminMobileNavbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white justify-between">
      <MobileNavbarSidebar />
      <div className=" w-full flex justify-end">
        <div>
          <AvatarMenu />
        </div>
      </div>
    </div>
  );
};

export default AdminMobileNavbar;
