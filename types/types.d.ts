import { Attachment, Requirement } from "@prisma/client";

interface UserObject {
  id: string;
  username: string;
  email: string;
  role: string;
}

export interface SessionObject {
  user: UserObject;
  expires: string;
}

export type InputProps = {
  label?: string;
  type?: "text" | "number" | "email" | "password" | "tel";
  placeholder: string;
  name: string;
  labelText?: string;
  numType?: string;
};

export interface ComboboxProps {
  options: {
    label: string;
    value: string;
  }[];
  value?: string;
  name: string;
  onChange: (value: string, label: string) => void;
}

export interface ClearanceProps {
  id: string;
  name: string;
  description?: string;
}

export interface Requirements {
  requirementId: string;
  requirement: Requirement & {
    attachments: Attachment[];
  };
}
