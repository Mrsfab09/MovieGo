"use server";

import { auth } from "@clerk/nextjs/server";
import { Page404 } from "../components/Page404/Page404";
import { Dashboard } from "../components/Dashboard/Dashboard";

/*
******************************************************
 nazwa funkcji: DashboardPage
 opis: Komponent wyswietlajacy strone głowną po zalogowaniu się do aplikacji 
*****************************************************
*/

export default async function DashboardPage() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return <Page404 />;
    }

    return (
      <>
        <Dashboard />
      </>
    );
  } catch (error) {
    console.error("Błąd podczas logowania", error);
    return <p>Wystąpił błąd podczas logowania.</p>;
  }
}
