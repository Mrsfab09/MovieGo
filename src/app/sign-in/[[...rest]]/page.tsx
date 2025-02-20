"use client";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return <SignIn />;
}

// "use client";

// import { SignIn } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";

// export default function SignInPage() {
//   const router = useRouter();

//   const handleSignIn = () => {
//     router.push("/dashboard");
//   };

//   return (
//     <div>
//       <SignIn routing="hash" afterSignInUrl="/dashboard" />
//     </div>
//   );
// }
