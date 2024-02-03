const { PrismaClient } = require("@prisma/client");
const database = new PrismaClient();
const bcrypt = require("bcryptjs");

const seedUser = async () => {
  try {
    const getSalt = (myPlaintextPassword: any) => {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(myPlaintextPassword, salt);

      return hash;
    };
    await database.user.createMany({
      data: [
        {
          username: "user1",
          password: getSalt("password1"),
          email: "user1@example.com",
          roleId: "1f47d978-56e4-42a9-8a66-365d16db6fd7",
        },
        {
          username: "user2",
          password: getSalt("password2"),
          email: "user2@example.com",
          roleId: "1f47d978-56e4-42a9-8a66-365d16db6fd7",
        },
        {
          username: "user3",
          password: getSalt("password3"),
          email: "user3@example.com",
          roleId: "1f47d978-56e4-42a9-8a66-365d16db6fd7",
        },
        {
          username: "user4",
          password: getSalt("password4"),
          email: "user4@example.com",
          roleId: "1f47d978-56e4-42a9-8a66-365d16db6fd7",
        },
        {
          username: "user5",
          password: getSalt("password5"),
          email: "user5@example.com",
          roleId: "1f47d978-56e4-42a9-8a66-365d16db6fd7",
        },
        {
          username: "user6",
          password: getSalt("password6"),
          email: "user6@example.com",
          roleId: "80a36f3f-8546-4574-ae19-31cd8b266ca7",
        },
        {
          username: "user7",
          password: getSalt("password7"),
          email: "user7@example.com",
          roleId: "80a36f3f-8546-4574-ae19-31cd8b266ca7",
        },
        {
          username: "user8",
          password: getSalt("password8"),
          email: "user8@example.com",
          roleId: "80a36f3f-8546-4574-ae19-31cd8b266ca7",
        },
        {
          username: "user9",
          password: getSalt("password9"),
          email: "user9@example.com",
          roleId: "80a36f3f-8546-4574-ae19-31cd8b266ca7",
        },
        {
          username: "user10",
          password: getSalt("password10"),
          email: "user10@example.com",
          roleId: "80a36f3f-8546-4574-ae19-31cd8b266ca7",
        },
        {
          username: "user11",
          password: getSalt("password11"),
          email: "user11@example.com",
          roleId: "d065faf9-9bd6-410e-9225-c0b2ec52fa04",
        },
        {
          username: "user12",
          password: getSalt("password12"),
          email: "user12@example.com",
          roleId: "d065faf9-9bd6-410e-9225-c0b2ec52fa04",
        },
        {
          username: "user13",
          password: getSalt("password13"),
          email: "user13@example.com",
          roleId: "d065faf9-9bd6-410e-9225-c0b2ec52fa04",
        },
        {
          username: "user14",
          password: getSalt("password14"),
          email: "user14@example.com",
          roleId: "80a36f3f-8546-4574-ae19-31cd8b266ca7",
        },
        {
          username: "user15",
          password: getSalt("password15"),
          email: "user15@example.com",
          roleId: "d065faf9-9bd6-410e-9225-c0b2ec52fa04",
        },
        {
          username: "user16",
          password: getSalt("password16"),
          email: "user16@example.com",
          roleId: "80a36f3f-8546-4574-ae19-31cd8b266ca7",
        },
        {
          username: "user17",
          password: getSalt("password17"),
          email: "user17@example.com",
          roleId: "80a36f3f-8546-4574-ae19-31cd8b266ca7",
        },
        {
          username: "user18",
          password: getSalt("password18"),
          email: "user18@example.com",
          roleId: "80a36f3f-8546-4574-ae19-31cd8b266ca7",
        },
        {
          username: "user19",
          password: getSalt("password19"),
          email: "user19@example.com",
          roleId: "80a36f3f-8546-4574-ae19-31cd8b266ca7",
        },
        {
          username: "user20",
          password: getSalt("password20"),
          email: "user20@example.com",
          roleId: "80a36f3f-8546-4574-ae19-31cd8b266ca7",
        },
      ],
    });
    console.log("seeded user success");
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    await database.$disconnect();
  }
};

const seedRole = async () => {
  try {
    await database.role.createMany({
      data: [{ role: "admin" }, { role: "user" }, { role: "staff" }],
    });
    console.log("seeded role success");
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    await database.$disconnect();
  }
};
// };

// seedRole();
seedUser();
