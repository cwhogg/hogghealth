"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  ADMIN_SESSION_COOKIE,
  ADMIN_SESSION_COOKIE_OPTIONS,
  encryptAdminSession,
} from "@/lib/session";

export type LoginState = { error?: string } | undefined;

export async function login(
  _state: LoginState,
  formData: FormData
): Promise<LoginState> {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    return { error: "Admin login is not configured yet." };
  }

  const password = formData.get("password");
  if (typeof password !== "string" || password.length === 0) {
    return { error: "Enter a password." };
  }
  if (password !== adminPassword) {
    return { error: "Incorrect password." };
  }

  const token = await encryptAdminSession();
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_SESSION_COOKIE, token, ADMIN_SESSION_COOKIE_OPTIONS);

  redirect("/admin");
}
