import "server-only";
import { cache } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_SESSION_COOKIE, decryptAdminSession } from "./session";

export const verifyAdminSession = cache(async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  const isValid = await decryptAdminSession(token);

  if (!isValid) {
    redirect("/admin/login");
  }
});
