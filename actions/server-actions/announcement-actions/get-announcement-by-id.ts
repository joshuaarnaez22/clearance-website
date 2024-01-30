import prisma from "@/lib/prisma";

export const getAnnouncementById = async (id: string) => {
  const announcement = await prisma.announcement.findUnique({
    where: {
      id,
    },
  });

  return announcement;
};
