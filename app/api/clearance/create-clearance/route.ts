import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { checkSessionRole } from "@/actions/check-session";

export async function POST(req: NextRequest) {
  try {
    const { name } = await req.json();
    const role = await checkSessionRole();

    if (role !== "admin") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const clearance = await prisma.clearance.create({
      data: {
        name,
      },
    });
    return NextResponse.json({ id: clearance.id }, { status: 201 });
  } catch (error) {
    console.log("[ERROR_IN_CREATING_CLEARANCE]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
