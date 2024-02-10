import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface AdminSidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}
const AdminSidebarItem = ({
  icon: Icon,
  label,
  href,
}: AdminSidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);
  return (
    <Link
      href={href}
      className={cn(
        "flex h-full w-full items-center text-slate-500 text-sm font-bold pl-6 transition-all hover:text-slate-600 hover:bg-slate-400/20",
        isActive &&
          "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700/20"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn("text-slate-500", isActive && "text-sky-700")}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-sky-700 transition-all h-full",
          isActive && "opacity-100"
        )}
      />
    </Link>
  );
};

export default AdminSidebarItem;
