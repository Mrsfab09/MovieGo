"use client";

import { useState } from "react";
import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/app/components/Footer/Footer";

/*
******************************************************
 nazwa funkcji: SignUpPage
 opis: Komponent wyswietlajacy strone rejestracji, oblugiwany przez system Clerk
*****************************************************
*/

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUpStart = () => {
    setIsLoading(true);
  };

  const handleSignUpSuccess = () => {
    setIsLoading(false);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1400px] min-w-[1300px] min-h-[800px] md:h-[700px] bg-neutral-950 rounded-lg border border-neutral-900 overflow-hidden p-6">
          {/* Lewa część – Obrazek */}
          <div className="relative flex flex-col md:block w-full h-full gap-5 p-2">
            <div className="flex flex-row gap-3">
              <div className="w-10 h-10 rounded-full border-4 border-red-700 flex items-center justify-center mb-20 text-gray-400">
                1
              </div>
              <span className="mt-2 text-gray-400">Personal data </span>
            </div>
            <div className="flex flex-row gap-3">
              <div className="w-10 h-10 rounded-full border-4 border-red-700 flex items-center justify-center mb-20 text-gray-400">
                2
              </div>
              <span className="mt-2 text-gray-400">Personal data </span>
            </div>
            <div className="flex flex-row gap-3">
              <div className="w-10 h-10 rounded-full border-4 border-red-700 flex items-center justify-center mb-20 text-gray-400">
                3
              </div>
              <span className="mt-2 text-gray-400">Personal data </span>
            </div>
            {/* <Image
              src="/assets/popcorn-cinema.jpg"
              alt="Popcorn Cinema"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              quality={75}
              loading="lazy"
            /> */}
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
            <SignUp
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

// "use client";

// import { SignUp } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";

// export default function SignUpPage() {
//   const router = useRouter();

//   const handleSignUp = () => {
//     router.push("/dashboard");
//   };

//   return (
//     <div>
//       <SignUp routing="hash" />
//     </div>
//   );
// }

// "use client";

// import { useUser } from "@clerk/nextjs"; // Importujemy hook
// import { SignUp } from "@clerk/nextjs";
// import Image from "next/image";
// import Link from "next/link";
// import { Footer } from "../components/Footer/Footer";
// import { useRouter } from "next/navigation"; // Używamy useRouter z next/navigation
// import { useEffect } from "react";

// export default function SignUpPage() {
//   const { isSignedIn } = useUser(); // Sprawdzamy, czy użytkownik jest zalogowany
//   const router = useRouter(); // Inicjalizujemy router

//   // Efekt, który działa po zakończeniu renderowania
//   useEffect(() => {
//     if (isSignedIn) {
//       router.push("/dashboard"); // Przekierowanie na dashboard po zalogowaniu
//     }
//   }, [isSignedIn, router]); // Uruchamiamy efekt tylko, gdy isSignedIn lub router się zmieni

//   // Jeśli użytkownik jest już zalogowany, nie renderujemy formularza
//   if (isSignedIn) {
//     return null; // Zwracamy null, aby nie renderować formularza rejestracji, gdy użytkownik jest zalogowany
//   }

//   return (
//     <>
//       <div className="flex flex-col justify-center items-center h-screen">
//         <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1200px] min-h-[750px] md:h-[700px] bg-neutral-900 rounded-lg shadow-xl border border-gray-700 overflow-hidden p-6">
//           {/* Lewa część – Obrazek */}
//           <div className="relative hidden md:block w-full h-full opacity-80">
//             <Image
//               src="/assets/popcorn-cinema.jpg"
//               alt="Popcorn Cinema"
//               layout="fill"
//               objectFit="cover"
//               objectPosition="center"
//               quality={75}
//               loading="lazy"
//             />
//           </div>

//           {/* Prawa część – Formularz */}
//           <div className="flex flex-col justify-center items-center w-full">
//             <Link href={"/"}>
//               <Image
//                 src={"/assets/logoGo.png"}
//                 alt="Movie logo"
//                 width={300}
//                 height={300}
//               />
//             </Link>
//             <SignUp
//               routing="hash"
//               appearance={{
//                 elements: {
//                   rootBox: "p-3",
//                   card: "bg-neutral-900 text-white p-6 rounded-lg w-full max-w-md",
//                   headerTitle: "text-2xl font-bold text-gray-100",
//                   socialButtonsBlockButton: "bg-gray-700 hover:bg-gray-600",
//                   formFieldInput: "bg-gray-700 border-none text-white",
//                   formButtonPrimary:
//                     "bg-red-900 hover:bg-red-600 text-white p-2 ",
//                 },
//               }}
//             />
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }
