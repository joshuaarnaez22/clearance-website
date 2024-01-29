import prisma from "@/lib/prisma";

export const getAllClearance = async () => {
  const clearance = await prisma.clearance.findMany({
    include: {
      requirements: true,
    },
  });

  return clearance;
};
