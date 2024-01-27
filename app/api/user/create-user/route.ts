import { checkSessionRole } from "@/actions/check-session";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export async function POST(req: NextRequest) {
  try {
    const newUser = await req.json();
    const role = await checkSessionRole();

    if (role !== "admin") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const emailExisted = await prisma.user.findUnique({
      where: {
        email: newUser.data.email,
      },
    });

    if (emailExisted) {
      return new NextResponse("Email Duplicate", { status: 409 });
    }

    const {
      email,
      password,
      firstname,
      lastname,
      username,
      role: userRole,
    } = newUser.data;
    await prisma.user.create({
      data: {
        email,
        password,
        roleId: userRole,
        username,
        profile: {
          create: {
            firstname,
            lastname,
          },
        },
      },
    });
    return new NextResponse("Created", { status: 201 });
  } catch (error) {
    console.log("[ERROR_IN_CREATING_USER]", error);

    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
