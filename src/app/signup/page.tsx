import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function SignUpPage() {
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
      <SignUp routing="hash" />
    </div>
  );
}
