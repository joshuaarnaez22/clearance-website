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

export const AnnouncementSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  content: yup.string().required("Content is required"),
  from: yup.date().nullable().typeError("Start date must be a valid date"),
  to: yup
    .date()
    .nullable()
    .when("from", ([from]) => {
      return from
        ? yup
            .date()
            .required("End date is required")
            .typeError("End date must be a valid date")
        : yup.date().nullable().typeError("End date must be a valid date");
    }),
  location: yup.string(),
  action: yup.string(),
});

export const AnnouncementTitleSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
});

export const UserProfileSchema = yup.object().shape({
  username: yup.string().required("Title is required"),
  email: yup.string().required("Title is required"),
  profile: yup.object().nullable().shape({
    address: yup.string().nullable(),
    mobilenumber: yup.string().nullable(),
    img: yup.string().nullable(),
    firstname: yup.string().nullable(),
    lastname: yup.string().nullable(),
    gender: yup.string().nullable(),
  }),
});

export const ChangePasswordSchema = yup.object().shape({
  oldPassword: yup.string().required("Old password is required"),
  newPassword: yup.string().required("New password is required"),
});
