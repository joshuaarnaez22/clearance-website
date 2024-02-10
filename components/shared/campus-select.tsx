"use client";
import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

interface CampusSelectProps {
  children: React.ReactNode;
}
const CampusSelect = ({ children }: CampusSelectProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-11/12 md:w-full">
        <DialogHeader>
          <DialogTitle>Switch campus</DialogTitle>
        </DialogHeader>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Campus selection" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">
              <div className="flex">
                Main Campus{" "}
                <span className="hidden md:flex">
                  {" "}
                  - Talisay City, Negros Occidental
                </span>
              </div>
            </SelectItem>
            <SelectItem value="dark">
              <div className="flex">
                Alijis Campus{" "}
                <span className="hidden md:flex">
                  {" "}
                  - Talisay City, Negros Occidental
                </span>
              </div>
            </SelectItem>
            <SelectItem value="system">
              <div className="flex">
                Binalbagan Campus{" "}
                <span className="hidden md:flex">
                  {" "}
                  - Binalbagan, Negros Occidental
                </span>
              </div>
            </SelectItem>
            <SelectItem value="system">
              <div className="flex">
                Fortune Towne Campus{" "}
                <span className="hidden md:flex">
                  {" "}
                  - Bacolod City, Negros Occidental
                </span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Warning!</AlertTitle>
          <AlertDescription>This action will log you out.</AlertDescription>
        </Alert>
        <div className="flex justify-between ">
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>

          <Button>Change</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CampusSelect;
