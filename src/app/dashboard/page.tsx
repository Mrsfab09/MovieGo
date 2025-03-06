import { auth } from '@clerk/nextjs/server';
import { Page404 } from "../components/Page404/Page404";
import LogoutButton from "../components/LogoutButton/LogoutButton";

// Typowanie dla user
type User = {
  id: string;
  email: string;
};

// Komponent serverowy (renderowany po stronie serwera)
export default async function DashboardPage() {
  try {
    // Uzyskanie danych użytkownika za pomocą Clerk
    const { userId, user } = await auth();

    // Jeśli użytkownik nie jest zalogowany
    if (!userId || !user) {
      return <Page404 />;
    }

    // Zbieramy dane użytkownika
    const userData: User = {
      id: userId,
      email: user.email || "",
    };

    // Zwracamy dashboard z danymi użytkownika
    return (
      <>
        <p>Witaj, {userData.id}!</p>
        <p>Email: {userData.email}</p>
        <LogoutButton />
      </>
    );
  } catch (error) {
    console.error('Błąd podczas logowania:', error);
    return <Page404 />;
  }
}
