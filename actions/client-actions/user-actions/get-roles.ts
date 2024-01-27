import axios from "axios";

export const getRoles = async () => {
  const roles = await axios.get("/api/user/get-roles");
  return roles.data;
};
