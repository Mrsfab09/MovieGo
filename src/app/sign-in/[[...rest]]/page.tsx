"use client";
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

/*
******************************************************
 nazwa funkcji: SignInPage
 opis: Komponent wyswietlajacy strone logowania, oblugiwany przez system Clerk
*****************************************************
*/

export default function SignInPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1200px] min-h-[750px] md:h-[700px] bg-neutral-900 rounded-lg shadow-xl border border-gray-700 overflow-hidden p-6">
          {/* Lewa część – Obrazek */}
          <div className="relative hidden md:block w-full h-full opacity-80">
            <Image
              src="/assets/popcorn-cinema.jpg"
              alt="Popcorn Cinema"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              quality={75}
              loading="lazy"
            />
          </div>

          {/* Prawa część – Formularz */}
          <div className="flex flex-col justify-center items-center w-full">
            <Link
              href="/"
              className="flex items-center mb-4 sm:mb-4 space-x-3 rtl:space-x-reverse"
            >
              <Image
                width={40}
                height={40}
                src="/film.svg"
                alt="MovieGo Logo"
              />
              <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">
                MovieGo
              </span>
            </Link>
            <SignIn
              afterSignInUrl={"/dashboard"}
              routing="hash"
              appearance={{
                elements: {
                  rootBox: "p-3",
                  card: "bg-neutral-900 text-white p-6 rounded-lg w-full max-w-md",
                  headerTitle: "text-2xl font-bold text-gray-100",
                  socialButtonsBlockButton: "bg-gray-700 hover:bg-gray-600",
                  formFieldInput: "bg-neutral-800 border-none text-white p-3",
                  formButtonPrimary: "p-3",
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
