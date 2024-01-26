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
    id: string;
    label: string;
    value: string;
  }[];
  value?: string;
  name: string;
  onChange: (value: string, id: string) => void;
}
