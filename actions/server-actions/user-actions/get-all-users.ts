import prisma from "@/lib/prisma";
export const getAllUser = async () => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        username: true,
        email: true,
        role: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return users;
  } catch (error) {
    console.log("ERROR_IN_FETCHING_USERS");

    return [];
  }
};
