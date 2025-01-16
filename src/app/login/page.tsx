"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

export default function SignInPage() {
  const { isSignedIn } = useUser(); // Hook do sprawdzenia, czy użytkownik jest zalogowany

  useEffect(() => {
    if (isSignedIn) {
      // Jeśli użytkownik jest zalogowany, przekieruj go na stronę dashboard
      window.location.href = "/dashboard"; // lub użyj routera Next.js
    }
  }, [isSignedIn]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Link href={"/"}>
        <Image
          src={"/assets/logoGo.png"}
          alt="Movie logo"
          width={300}
          height={300}
        />
      </Link>
      <SignIn routing="hash" />
    </div>
  );
}
