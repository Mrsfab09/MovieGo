import Link from "next/link";

export function Page404() {
  return (
    <main className="grid min-h-screen place-items-center bg-transparent px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center flex flex-col items-center">
        <p className="text-base font-semibold text-red-600">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-300 sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl w-[500px]">
          Sorry, we couldn’t find the page you’re looking for.{" "}
          <Link href={"/sign-in"} className="hover:text-neutral-300">
            Login
          </Link>{" "}
          or{" "}
          <Link href={"/sign-up"} className="hover:text-neutral-300">
            register
          </Link>{" "}
          to go to the site
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-gray-300">
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
