import React from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import AdminSidebar from "../admin-sidebar/sidebar";

const MobileNavbarSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden hover:opacity-75 pr-4">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-white">
        <AdminSidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbarSidebar;
