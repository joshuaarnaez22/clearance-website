import axios from "axios";

export const createAttachments = async (data: any) => {
  const attachments = await axios.patch("/api/requirement/create-attachments", {
    data,
  });
  return attachments;
};
