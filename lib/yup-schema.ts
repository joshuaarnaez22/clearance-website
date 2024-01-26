import * as yup from "yup";

export const UserEmailSchema = yup.object().shape({
  email: yup
    .string()
    .trim() // Remove leading and trailing whitespace
    .email("Must be a valid email address")
    .required("Email is required"),
  fname: yup.string().required("Firstname is required"),
  lname: yup.string().required("Lastname is required"),
  role: yup
    .string()
    .oneOf(["admin", "staff", "user"], "Role is required")
    .required("Role is required"),
});
