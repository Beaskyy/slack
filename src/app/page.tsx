"use client";

import { useAuthActions } from "@convex-dev/auth/react";

export default function Home() {
  const { signOut } = useAuthActions();
  return (
    <div>
      <h3>Logged In!</h3>
      <button onClick={() => signOut()}>SignOut</button>
    </div>
  );
}
    