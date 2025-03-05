// app/dashboard/page.tsx
"use server"; // Upewnij się, że jest to komponent serwerowy

import { auth } from "@clerk/nextjs/server"; // Importuj auth z Clerk
import LogoutButton from "../components/LogoutButton/LogoutButton";
// import { AlertTest } from "../components/AlertTest/AlertTest";
import { Page404 } from "../components/Page404/Page404";

export default async function DashboardPage() {
  try {
    const { userId } = await auth(); 

    if (!userId) {
      return <Page404 />;
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
