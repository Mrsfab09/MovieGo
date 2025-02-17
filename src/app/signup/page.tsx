import { SignUp } from "@clerk/nextjs";
// import { withTheme } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/Footer/Footer";

export default function SignUpPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        {/* <SignUp routing="hash" /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1200px] min-h-[750px] md:h-[700px] bg-neutral-900 rounded-lg shadow-xl border border-gray-700 overflow-hidden p-6">
          {/* Lewa część – Obrazek */}
          <div
            className="hidden md:block bg-cover bg-center opacity-70"
            style={{ backgroundImage: "url('/assets/popcorn-cinema.jpg')" }}
          ></div>

          {/* Prawa część – Formularz */}
          <div className="flex flex-col justify-center items-center w-full">
            <Link href={"/"}>
              <Image
                src={"/assets/logoGo.png"}
                alt="Movie logo"
                width={300}
                height={300}
              />
            </Link>
            <SignUp
              routing="hash"
              appearance={{
                elements: {
                  rootBox: "p-3",
                  card: "bg-gray-800 text-white p-6 rounded-lg w-full max-w-md",
                  headerTitle: "text-2xl font-bold text-gray-100",
                  socialButtonsBlockButton: "bg-gray-700 hover:bg-gray-600",
                  formFieldInput: "bg-gray-700 border-none text-white",
                  formButtonPrimary:
                    "bg-red-900 hover:bg-red-600 text-white p-2",
                },
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
