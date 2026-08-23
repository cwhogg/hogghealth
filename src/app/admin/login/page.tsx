"use client";

import { useActionState } from "react";
import { login } from "./actions";

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(login, undefined);

  return (
    <section className="max-w-sm mx-auto px-4 sm:px-8 py-24">
      <h1 className="font-headline text-2xl text-foreground mb-6">
        Admin Login
      </h1>
      <form action={formAction} className="space-y-4">
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          autoFocus
          className="w-full border border-rule rounded-sm px-3 py-2 font-sans text-sm bg-surface text-foreground"
        />
        {state?.error && (
          <p className="font-sans text-sm text-accent">{state.error}</p>
        )}
        <button
          type="submit"
          disabled={pending}
          className="btn-primary w-full justify-center disabled:opacity-60"
        >
          {pending ? "Signing in…" : "Sign In"}
        </button>
      </form>
    </section>
  );
}
