"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Image from "next/image";

import { useState } from "react";
import Link from "next/link";

const initialNavigation = [
  { name: "Features", href: "#features", current: false },
  { name: "Pricing", href: "/pricing", current: false },
  { name: "Faq", href: "#faq", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export function Navbar() {
  const [navigation, setNavigation] = useState(initialNavigation);

  const handleClick = (clickedItem: string) => {
    setNavigation((prevNavItems) =>
      prevNavItems.map((item) =>
        item.name === clickedItem
          ? { ...item, current: true }
          : { ...item, current: false }
      )
    );
  };
  return (
    <Disclosure
      as="nav"
      className="backdrop-blur-sm bg-white/4 z-50 fixed w-full top-0 left-0"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <div className="flex shrink-0 items-center">
              <Link href="/">
                <Image
                  width={200}
                  height={200}
                  alt="logoMovieGo"
                  src="/assets/logoGo.png"
                  className="cursor-pointer"
                />
              </Link>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-center">
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    onClick={() => handleClick(item.name)}
                    className={classNames(
                      item.current
                        ? "text-white border border-neutral-600 "
                        : "text-gray-300 hover:bg-transparent hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center space-x-4">
            <Link href="/signup">
              <button className="bg-[#ff433dd5] rounded-md px-4 py-2 text-sm font-medium text-neutral-300">
                SignUp
              </button>
            </Link>
            <Link href="/login">
              <button className="rounded-md px-4 py-2 text-sm font-medium text-neutral-100 hover:bg-neutral-800">
                Log In
              </button>
            </Link>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              onClick={() => handleClick(item.name)}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-neutral-200 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
