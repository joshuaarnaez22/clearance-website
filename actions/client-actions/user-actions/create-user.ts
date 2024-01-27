import axios from "axios";

export const createUser = async (data: any) => {
  const user = await axios.post("/api/user/create-user", { data });
  return user;
};
