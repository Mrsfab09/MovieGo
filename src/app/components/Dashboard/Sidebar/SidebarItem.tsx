"use client";

import Link from "next/link";
import { SidebarItemProps } from "../../../types/movieTypes";

/*
******************************************************
 nazwa funkcji: SidebarItem
 opis: Komponent wyswietlajacy pojedyncze elementy bocznego menu nawigacyjnego
*****************************************************
*/

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  href,
  active = false,
  children,
}) => (
  <Link href={href} className="block">
    <div
      className={`flex flex-col items-center justify-center p-3 rounded-lg transition-colors duration-200 ${
        active
          ? "bg-red-700 text-white"
          : "text-gray-400 hover:bg-neutral-800 hover:text-white"
      }`}
      title={label}
    >
      <div className="text-center">{icon}</div>
      {children && <div>{children}</div>}
    </div>
  </Link>
);

export default SidebarItem;
