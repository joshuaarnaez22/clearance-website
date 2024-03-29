import { checkSession } from "@/actions/check-session";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

const authHandler = async () => {
  const userId = await checkSession();
  if (!userId) throw new Error("Unauthorized");
  return { userId };
};

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  requirementsAttachments: f(["image", "pdf", "text"])
    .middleware(() => authHandler())
    .onUploadComplete(() => {}),
  announcementThumbnail: f(["image"])
    .middleware(() => authHandler())
    .onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
