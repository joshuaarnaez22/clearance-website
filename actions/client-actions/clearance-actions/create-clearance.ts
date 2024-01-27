import axios from "axios";

export const createClearance = async (data: any) => {
  const clearance = await axios.post("/api/clearance/create-clearance", {
    ...data,
  });
  return clearance.data;
};

export const createRequirement = async (data: any, id: string) => {
  const clearance = await axios.post("/api/requirement/create-requirement", {
    ...data,
    id,
  });
  return clearance.data;
};
