import prisma from "@/lib/prisma";

export const getUserByIdServer = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        username: true,
        email: true,
        profile: {
          select: {
            address: true,
            mobilenumber: true,
            img: true,
            firstname: true,
            lastname: true,
            gender: true,
          },
        },
      },
    });
    return user;
  } catch (error) {
    console.log("ERROR_IN_FETCHING_USER");

    return null;
  }
};
