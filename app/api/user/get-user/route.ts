import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { UserObject } from "@/types/types";
export async function GET() {
  try {
    // const session = (await getServerSession(authOptions)) as UserObject;
    // const userId = session?.user?.id;
    // if (!userId) {
    //   return new NextResponse("Unauthorized", { status: 401 });
    // }
    // const user = await prisma.user.findUnique({
    //   where: {
    //     id: userId,
    //   },
    //   include: {
    //     role: true,
    //   },
    // });
    // return NextResponse.json({
    //   user: { role: user?.role, id: user?.id, email: user?.email },
    // });
  } catch (error) {
    console.log("[ERROR_IN_GETTING_USER]", error);

    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
