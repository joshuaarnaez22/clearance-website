import * as yup from "yup";

export const UserEmailSchema = yup.object().shape({
  email: yup
    .string()
    .trim() // Remove leading and trailing whitespace
    .email("Must be a valid email address")
    .required("Email is required"),
  firstname: yup.string().required("Firstname is required"),
  lastname: yup.string().required("Lastname is required"),
  password: yup.string().required("Password is required"),
  username: yup.string().required("Username is required"),
  role: yup.string().required("Role is required"),
});

export const ClearanceNameSchema = yup.object().shape({
  name: yup.string().required("Clearance name is required"),
});

export const ClearanceSchema = yup.object().shape({
  name: yup.string().required("Clearance is required"),
  description: yup.string().required("Description is required"),
});

export const RequirementSchema = yup.object().shape({
  name: yup.string().required("Requirement name is required"),
  description: yup.string().required("Requirement description is required"),
});

export const RequirementNameSchema = yup.object().shape({
  name: yup.string().required("Clearance name is required"),
});
