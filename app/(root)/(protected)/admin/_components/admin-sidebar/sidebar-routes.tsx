"use client";
import { GalleryHorizontalEnd, Layout, Users, Volume2 } from "lucide-react";
import React from "react";
import AdminSidebarItem from "./sidebar-item";

const AdminSidebarRoutes = () => {
  const adminRoutes = [
    { icon: Layout, href: "/admin/dashboard", label: "Dashboard" },
    { icon: Users, href: "/admin/users", label: "Users" },
    {
      icon: GalleryHorizontalEnd,
      href: "/admin/clearance",
      label: "Clearance",
    },
    {
      icon: Volume2,
      href: "/admin/users",
      label: "Announcements",
    },
  ];

  return (
    <div className=" flex flex-col w-full  h-full">
      {adminRoutes.map((items) => (
        <div key={items.href} className="h-full">
          <AdminSidebarItem {...items} />
        </div>
      ))}
    </div>
  );
};

export default AdminSidebarRoutes;
