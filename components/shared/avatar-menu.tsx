"use client";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Confirmation from "./confirmation";
import { Settings } from "lucide-react";
import ChangePassword from "./change-password";

const AvatarMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="hover:cursor-pointer hover:opacity-80">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-6">
        <DropdownMenuLabel className="flex items-center gap-x-1">
          <Settings className="h-4 w-4" />
          Settings
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onSelect={(e) => {
            e.preventDefault();
          }}
        >
          <ChangePassword>
            <div className="flex justify-between w-full">
              Change password
              <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
            </div>
          </ChangePassword>
        </DropdownMenuItem>
        <DropdownMenuItem
          className=" text-red-600 w-full"
          onSelect={(e) => {
            e.preventDefault();
          }}
        >
          <Confirmation>
            <div className="flex justify-between w-full">
              Delete account
              <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
            </div>
          </Confirmation>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘L</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarMenu;
