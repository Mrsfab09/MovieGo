"use server";

import { auth } from "@clerk/nextjs/server";
import LogoutButton from "../components/LogoutButton/LogoutButton";
import { Page404 } from "../components/Page404/Page404";

export default async function DashboardPage() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return <Page404 />;
    }

    return (
      <>
        <LogoutButton />
      </>
    );
  } catch (error) {
    console.error("Błąd podczas logowania", error);
    return <p>Wystąpił błąd podczas logowania.</p>;
  }
}
