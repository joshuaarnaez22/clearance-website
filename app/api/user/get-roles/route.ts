import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const roles = await prisma.role.findMany({});

    return NextResponse.json({ data: roles, status: 200 });
  } catch (error) {
    console.log("[ERROR_IN_GETTING_ROLES]", error);

    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
