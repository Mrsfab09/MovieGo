import { UserButton } from "@clerk/nextjs";

export default function LogoutButton() {
  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <h1>Movie Go</h1>
      <UserButton afterSignOutUrl="/" />
    </nav>
  );
}

// "use client";

// import { useClerk } from "@clerk/clerk-react";
// import { useRouter } from "next/navigation";

// export const LogoutButton = () => {
//   const { signOut } = useClerk();
//   const router = useRouter();

//   const handleLogout = async () => {
//     await signOut();
//     router.push("/"); // Przekierowanie po wylogowaniu
//   };

//   return (
//     <button
//       onClick={handleLogout}
//       className="bg-red-600 text-white p-2 rounded"
//     >
//       Log out
//     </button>
//   );
// };

// "use client"; // Zapewnia, że komponent działa po stronie klienta

// import { useClerk } from "@clerk/clerk-react";
// import { useRouter } from "next/navigation"; // Wykorzystujemy `next/router`

// export const LogoutButton = () => {
//   const { signOut } = useClerk();
//   const router = useRouter();

//   const handleLogout = async () => {
//     await signOut(); // Wylogowanie użytkownika
//     router.push("/"); // Przekierowanie na stronę główną po wylogowaniu
//   };

//   return (
//     <button
//       onClick={handleLogout}
//       className="bg-red-600 text-white p-2 rounded"
//     >
//       Log out
//     </button>
//   );
// };
