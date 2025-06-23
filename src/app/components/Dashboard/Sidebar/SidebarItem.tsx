import { SidebarItemProps } from "@/app/types/movieTypes";
import Link from "next/link";
import React from "react";

export const SidebarItem = ({
  icon,
  label,
  href,
  active,
  children,
  component,
}: SidebarItemProps) => {
  const baseClass = `flex flex-col items-center justify-center p-3 rounded-lg transition-colors duration-200 ${
    active
      ? "bg-red-700 text-white"
      : "text-gray-400 hover:bg-neutral-800 hover:text-white"
  }`;

  // Jeśli przekazano komponent, wyświetl go zamiast linka
  if (component) {
    return (
      <div className="block" title={label}>
        <div className={baseClass}>
          <div className="text-center">{icon}</div>
          <div className="w-full mt-2">{component}</div>
        </div>
      </div>
    );
  }

  // Domyślne zachowanie z linkiem
  return (
    <Link href={href || "#"} className="block" title={label}>
      <div className={baseClass}>
        <div className="text-center">{icon}</div>
        {children && <div>{children}</div>}
      </div>
    </Link>
  );
};
