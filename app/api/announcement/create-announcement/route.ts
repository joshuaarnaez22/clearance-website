import { NextRequest, NextResponse } from "next/server";
import { checkSessionRole } from "@/actions/check-session";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { title } = await req.json();
    const role = await checkSessionRole();

    if (role !== "admin") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const announcement = await prisma.announcement.create({
      data: {
        title,
      },
    });
    return NextResponse.json({ id: announcement.id }, { status: 201 });
  } catch (error) {
    console.log("[ERROR_IN_CREATING_ANNOUNCEMENT]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { data } = await req.json();
    const role = await checkSessionRole();

    if (role !== "admin") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await prisma.announcement.update({
      where: {
        id: data.id,
      },
      data: {
        ...data.values,
      },
    });
    return new NextResponse("OK", { status: 200 });
  } catch (error) {
    console.log("[ERROR_IN_CREATING_ANNOUNCEMENT]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
