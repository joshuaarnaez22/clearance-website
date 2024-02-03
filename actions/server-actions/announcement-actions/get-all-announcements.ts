import prisma from "@/lib/prisma";
export const getAllAnnouncements = async () => {
  try {
    const users = await prisma.announcement.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return users;
  } catch (error) {
    console.log("ERROR_IN_FETCHING_ANNOUNCEMENTS");

    return [];
  }
};
