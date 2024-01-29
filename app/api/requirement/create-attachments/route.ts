import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { checkSessionRole } from "@/actions/check-session";

export async function PATCH(req: NextRequest) {
  try {
    const attachments = await req.json();
    const role = await checkSessionRole();

    if (role !== "admin") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await prisma.attachment.createMany({
      data: [...attachments.data],
    });

    return new NextResponse("Created", { status: 201 });
  } catch (error) {
    console.log("[ERROR_IN_UPDATING_REQUIREMENT]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
