import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Wyklucz trasę `/signup`, `/login` oraz ich podścieżki
    "/((?!_next|signup|login).*)", // Dodano wykluczenie `/login`
    // Zawsze stosuj middleware do API
    "/(api|trpc)(.*)",
  ],
};
