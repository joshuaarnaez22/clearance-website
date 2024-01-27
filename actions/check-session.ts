import { authOptions } from "@/lib/auth";
import { SessionObject } from "@/types/types";
import { getServerSession } from "next-auth";

export const checkSession = async () => {
  const session = (await getServerSession(authOptions)) as SessionObject;
  const userId = session?.user?.id || null;

  return userId;
};

export const checkSessionRole = async () => {
  const session = (await getServerSession(authOptions)) as SessionObject;
  const userRole = session?.user?.role || null;

  return userRole;
};
