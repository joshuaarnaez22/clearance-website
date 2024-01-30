import axios from "axios";

export const createAnnouncement = async (data: any) => {
  const announcement = await axios.post(
    "/api/announcement/create-announcement",
    {
      ...data,
    }
  );
  return announcement.data;
};

export const updateAnnouncement = async (data: any) => {
  const announcement = await axios.patch(
    "/api/announcement/create-announcement",
    {
      data,
    }
  );
  return announcement.data;
};
