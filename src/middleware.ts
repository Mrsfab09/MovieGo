import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?!_next|static|favicon.ico|sign-in|sign-up).*)", // Upewnij się, że middleware nie blokuje sign-in i sign-up
    "/(api|trpc)(.*)", // Middleware dla API
  ],
};
