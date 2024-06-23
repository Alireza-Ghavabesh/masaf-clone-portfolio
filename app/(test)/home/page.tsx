// mark as client component
"use client";

// importing necessary functions
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  // extracting data from usesession as session
  const { data: session, status } = useSession();

  return (
    <div>
      {status === "authenticated" && "authenticated"}
      {status === "unauthenticated" && "unauthenticated"}

      {status === "loading" && "loading..."}
    </div>
  );
}
