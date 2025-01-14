"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  const { isSignedIn } = useUser(); // Hook do sprawdzenia, czy użytkownik jest zalogowany

  useEffect(() => {
    if (isSignedIn) {
      // Jeśli użytkownik jest zalogowany, przekieruj go na stronę dashboard
      window.location.href = "/dashboard"; // lub użyj routera Next.js
    }
  }, [isSignedIn]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <SignIn routing="hash" />
    </div>
  );
}
