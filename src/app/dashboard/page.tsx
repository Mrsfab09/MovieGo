// app/dashboard/page.tsx
"use server"; // Upewnij się, że jest to komponent serwerowy

import { auth } from "@clerk/nextjs/server"; // Importuj auth z Clerk
import LogoutButton from "../components/LogoutButton/LogoutButton";
import { AlertTest } from "../components/AlertTest/AlertTest";

export default async function DashboardPage() {
  try {
    const { userId } = await auth(); // Czekaj na rozwiązanie obietnicy

    if (!userId) {
      return <AlertTest />;
    }

    return (
      <>
        <p>Witaj, {userId}!</p> <LogoutButton />
      </>
    );
  } catch (error) {
    console.error("Błąd podczas logowania", error);
    return <p>Wystąpił błąd podczas logowania.</p>;
  }
}
