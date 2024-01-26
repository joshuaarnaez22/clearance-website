import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const roleArray = [
  { id: "1", label: "Admin", value: "admin" },
  { id: "2", label: "User", value: "user" },
  { id: "3", label: "Staff", value: "staff" },
];
