import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { checkSessionRole } from "@/actions/check-session";

export async function PATCH(req: NextRequest) {
  try {
    const { clearanceId, data: clearanceData } = await req.json();
    const role = await checkSessionRole();

    if (role !== "admin") {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await prisma.clearance.update({
      where: {
        id: clearanceId,
      },
      data: {
        ...clearanceData,
      },
    });
    return new NextResponse("OK", { status: 200 });
  } catch (error) {
    console.log("[ERROR_IN_UPDATING_CLEARANCE]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
