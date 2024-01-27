import axios from "axios";

export const user = async (params: any) => {
  const user = await axios.post("/api/user", { params });
};
