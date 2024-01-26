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
          roleId: "83a4e371-0a4e-47d8-8e05-ee0e3aedc777",
        },
        {
          username: "user2",
          password: getSalt("password2"),
          email: "user2@example.com",
          roleId: "83a4e371-0a4e-47d8-8e05-ee0e3aedc777",
        },
        {
          username: "user3",
          password: getSalt("password3"),
          email: "user3@example.com",
          roleId: "83a4e371-0a4e-47d8-8e05-ee0e3aedc777",
        },
        {
          username: "user4",
          password: getSalt("password4"),
          email: "user4@example.com",
          roleId: "83a4e371-0a4e-47d8-8e05-ee0e3aedc777",
        },
        {
          username: "user5",
          password: getSalt("password5"),
          email: "user5@example.com",
          roleId: "83a4e371-0a4e-47d8-8e05-ee0e3aedc777",
        },
        {
          username: "user6",
          password: getSalt("password6"),
          email: "user6@example.com",
          roleId: "9e37739c-eab5-4899-9de4-7e82f7929361",
        },
        {
          username: "user7",
          password: getSalt("password7"),
          email: "user7@example.com",
          roleId: "9e37739c-eab5-4899-9de4-7e82f7929361",
        },
        {
          username: "user8",
          password: getSalt("password8"),
          email: "user8@example.com",
          roleId: "9e37739c-eab5-4899-9de4-7e82f7929361",
        },
        {
          username: "user9",
          password: getSalt("password9"),
          email: "user9@example.com",
          roleId: "9e37739c-eab5-4899-9de4-7e82f7929361",
        },
        {
          username: "user10",
          password: getSalt("password10"),
          email: "user10@example.com",
          roleId: "9e37739c-eab5-4899-9de4-7e82f7929361",
        },
        {
          username: "user11",
          password: getSalt("password11"),
          email: "user11@example.com",
          roleId: "c7f650e7-1833-4d72-85e6-161a8cdfef5c",
        },
        {
          username: "user12",
          password: getSalt("password12"),
          email: "user12@example.com",
          roleId: "c7f650e7-1833-4d72-85e6-161a8cdfef5c",
        },
        {
          username: "user13",
          password: getSalt("password13"),
          email: "user13@example.com",
          roleId: "c7f650e7-1833-4d72-85e6-161a8cdfef5c",
        },
        {
          username: "user14",
          password: getSalt("password14"),
          email: "user14@example.com",
          roleId: "9e37739c-eab5-4899-9de4-7e82f7929361",
        },
        {
          username: "user15",
          password: getSalt("password15"),
          email: "user15@example.com",
          roleId: "c7f650e7-1833-4d72-85e6-161a8cdfef5c",
        },
        {
          username: "user16",
          password: getSalt("password16"),
          email: "user16@example.com",
          roleId: "9e37739c-eab5-4899-9de4-7e82f7929361",
        },
        {
          username: "user17",
          password: getSalt("password17"),
          email: "user17@example.com",
          roleId: "9e37739c-eab5-4899-9de4-7e82f7929361",
        },
        {
          username: "user18",
          password: getSalt("password18"),
          email: "user18@example.com",
          roleId: "9e37739c-eab5-4899-9de4-7e82f7929361",
        },
        {
          username: "user19",
          password: getSalt("password19"),
          email: "user19@example.com",
          roleId: "9e37739c-eab5-4899-9de4-7e82f7929361",
        },
        {
          username: "user20",
          password: getSalt("password20"),
          email: "user20@example.com",
          roleId: "9e37739c-eab5-4899-9de4-7e82f7929361",
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

// const seedClearanceSeed = async () => {
//   try {
//     await database.clearance.createMany({
//       data: [
//         {
//           name: "Visitor Clearance",
//           description:
//             "Issued to individuals who are not regular staff or students but need access to the school premises for specific reasons.",
//         },
//         {
//           name: "Employee Clearance",
//           description:
//             "Background checks and approval for school staff, including teachers, administrators, and support staff.",
//         },
//         {
//           name: "Student Clearance",
//           description:
//             "Authorization for students to participate in various activities, events, or programs.",
//         },
//         {
//           name: "Security Clearance",
//           description:
//             "Typically for personnel responsible for school security, ensuring that they are cleared to handle security-related tasks.",
//         },
//         {
//           name: "Volunteer Clearance",
//           description:
//             "Required for individuals who wish to volunteer at the school, especially if their duties involve direct interaction with students.",
//         },
//         {
//           name: "Contractor Clearance",
//           description:
//             "Issued to contractors or service providers working within the school premises, ensuring they meet safety and security standards.",
//         },
//         {
//           name: "Medical Clearance",
//           description:
//             "Often required for students participating in sports or other physical activities to ensure they are physically fit.",
//         },
//         {
//           name: "Library Clearance",
//           description:
//             "Required for borrowing books or accessing certain resources in the school library.",
//         },
//         {
//           name: "Computer Lab Clearance",
//           description:
//             "Authorization to use computer facilities or labs within the school.",
//         },
//         {
//           name: "Cafeteria Clearance",
//           description:
//             "Authorization to access and purchase meals in the school cafeteria.",
//         },
//         {
//           name: "Special Event Clearance",
//           description:
//             "Clearance for students, staff, or visitors attending special events, such as performances, assemblies, or field trips.",
//         },
//         {
//           name: "Parking Clearance",
//           description:
//             "Authorization for individuals to park their vehicles on school premises.",
//         },
//         {
//           name: "Lab Access Clearance",
//           description:
//             "Authorization for students or staff to access specific laboratories for educational or research purposes.",
//         },
//         {
//           name: "Equipment Clearance",
//           description:
//             "Authorization to use specialized equipment within the school, such as audio-visual equipment or scientific instruments.",
//         },
//         {
//           name: "Temporary Access Clearance",
//           description:
//             "Issued for short-term access to certain facilities or activities within the school.",
//         },
//       ],
//     });
//     console.log("seeded clearance success");
//   } catch (error) {
//     console.error("Error seeding the database:", error);
//   } finally {
//     await database.$disconnect();
//   }
// };

// const seedApprovers = async () => {
//   try {
//     const users = await database.user.findMany({});

//     const approvers = users.map((user: any) => ({ userId: user.id }));

//     await database.approver.createMany({
//       data: approvers,
//     });
//     console.log("seeded approvers success");
//   } catch (error) {
//     console.error("Error seeding the database:", error);
//   } finally {
//     await database.$disconnect();
//   }
// };

// const seedRequirments = async () => {
//   try {
//     await database.requirement.createMany({
//       data: [
//         {
//           name: "ID Card",
//           description: "A valid identification card issued by the school.",
//         },
//         {
//           name: "Parent/Guardian Consent",
//           description:
//             "Written consent from the parent or guardian for clearance.",
//         },
//         {
//           name: "School Fees Clearance",
//           description: "Clearance of all outstanding school fees.",
//         },
//         {
//           name: "Library Books Return",
//           description: "Return of all borrowed library books.",
//         },
//         {
//           name: "Classroom Key Return",
//           description: "Return of classroom keys if applicable.",
//         },
//         {
//           name: "Sports Equipment Return",
//           description: "Return of any borrowed sports equipment.",
//         },
//         {
//           name: "Uniform Return",
//           description: "Return of school uniforms in good condition.",
//         },
//         {
//           name: "Medical Check-Up",
//           description: "Medical clearance certifying good health.",
//         },
//         {
//           name: "Parent-Teacher Meeting Attendance",
//           description: "Attendance in the last parent-teacher meeting.",
//         },
//         {
//           name: "Extracurricular Activity Clearance",
//           description:
//             "Clearance from any participation in extracurricular activities.",
//         },
//         {
//           name: "Exam Room Clean-Up",
//           description: "Participation in the post-exam room clean-up.",
//         },
//         {
//           name: "School Event Participation",
//           description: "Clearance from participation in recent school events.",
//         },
//         {
//           name: "Community Service Completion",
//           description: "Completion of required community service hours.",
//         },
//         {
//           name: "Behavioral Clearance",
//           description: "Positive behavior report from teachers and staff.",
//         },
//         {
//           name: "Dormitory Checkout",
//           description:
//             "Checkout clearance for students residing in school dormitories.",
//         },
//         {
//           name: "Technology Equipment Return",
//           description: "Return of any borrowed technology equipment.",
//         },
//         {
//           name: "Art Supplies Return",
//           description: "Return of any borrowed art supplies.",
//         },
//         {
//           name: "Transportation Clearance",
//           description: "Clearance from using school transportation services.",
//         },
//         {
//           name: "Student Council Duties",
//           description: "Completion of assigned duties in the student council.",
//         },
//         {
//           name: "Graduation Requirements",
//           description: "Clearance of all requirements for graduation.",
//         },
//       ],
//     });
//     console.log("seeded requirements success");
//   } catch (error) {
//     console.error("Error seeding the database:", error);
//   } finally {
//     await database.$disconnect();
//   }
// };

// const seedClearanceForm = async () => {
//   try {
//     const clearances = await database.clearance.findMany({});

//     const generateClearanceForm = clearances.map((clearance: any) => ({
//       clearanceId: clearance.id,
//     }));
//     await database.clearanceForm.createMany({
//       data: generateClearanceForm,
//     });
//     console.log("seeded clearanceForm success");
//   } catch (error) {
//     console.error("Error seeding the database:", error);
//   } finally {
//     await database.$disconnect();
//   }
// };

// seedClearanceSeed();
// seedRole();
// seedApprovers();
seedUser();
// seedRequirments();
// seedClearanceForm();
