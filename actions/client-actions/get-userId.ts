import axios from "axios";

export const getUserById = async () => {
  const user = await axios.get("/api/user/get-user");
  return user.data;
};
