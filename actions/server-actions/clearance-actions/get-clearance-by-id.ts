import prisma from "@/lib/prisma";

export const getClearanceById = async (id: string) => {
  const clearance = await prisma.clearance.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      description: true,
      requirements: true,
    },
  });

  return clearance;
};

export const getRequirementById = async (
  clearanceId: string,
  reqId: string
) => {
  const requirement = await prisma.requirement.findUnique({
    where: {
      id: reqId,
      clearanceId,
    },
    include: {
      attachments: true,
    },
  });

  return requirement;
};
