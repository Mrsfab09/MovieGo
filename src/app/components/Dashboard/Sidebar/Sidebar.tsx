"use client";

import React from "react";
import Link from "next/link";
import { SignOutButton, useUser } from "@clerk/nextjs";
import {
  Film,
  Home,
  Search,
  Tv,
  TrendingUp,
  Calendar,
  Bookmark,
  Settings,
  LogOut,
} from "lucide-react";
import SidebarItem from "./SidebarItem";
import { useRouter, usePathname } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

/*
******************************************************
 nazwa funkcji: Sidebar
 opis: Komponent wyswietlajacy boczne menu nawigacyjne w dashboard, czyli głownej stronie po zalogowaniu się do aplikacji 
*****************************************************
*/

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { isLoaded, user } = useUser();

  return (
    <>
      <aside className="hidden md:flex fixed top-0 bottom-0 left-0 w-16 bg-neutral-950/50 border-r border-neutral-800 z-50 flex-col">
        <div className="flex justify-center items-center h-16 border-b border-neutral-800">
          <Film size={28} className="text-red-500" />
        </div>

        <nav className="flex-1 py-6 flex flex-col items-center space-y-5">
          <SidebarItem
            icon={<Home size={24} />}
            label="Home"
            href="/dashboard"
            active={pathname === "/dashboard"}
          />
          <SidebarItem
            icon={<Search size={24} />}
            label="Search"
            href="/search"
            active={pathname === "/search"}
          />
          <SidebarItem
            icon={<Film size={24} />}
            label="Movies"
            href="/movies"
            active={pathname === "/movies"}
          />
          <SidebarItem
            icon={<Tv size={24} />}
            label="TV Shows"
            href="/tv"
            active={pathname === "/tv"}
          />
          <SidebarItem
            icon={<TrendingUp size={24} />}
            label="Trending"
            href="/trending"
            active={pathname === "/trending"}
          />
          <SidebarItem
            icon={<Calendar size={24} />}
            label="Coming Soon"
            href="/upcoming"
            active={pathname === "/upcoming"}
          />
          {isLoaded && user && (
            <SidebarItem
              icon={<Bookmark size={24} />}
              label="My List"
              href="/favorites"
              active={pathname === "/favorites"}
            />
          )}
        </nav>

        <div className="py-6 flex flex-col items-center space-y-5">
          <SidebarItem
            icon={<Settings size={24} />}
            label="Settings"
            href="/settings"
            active={pathname === "/settings"}
          />
          {isLoaded && user ? (
            <SidebarItem href="">
              <SignOutButton>
                <LogOut size={24} />
              </SignOutButton>
            </SidebarItem>
          ) : (
            <SidebarItem
              icon={<LogOut size={24} />}
              label="Login"
              href="/login"
            />
          )}
        </div>
      </aside>

      {/* Mobile Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-neutral-950/90 border-t border-neutral-800 flex items-center justify-around z-50">
        <Link href="/dashboard" className="flex flex-col items-center">
          <Home size={22} className="text-white" />
          <span className="text-xs text-gray-400 mt-1">Home</span>
        </Link>

        <Link href="/search" className="flex flex-col items-center">
          <Search size={22} className="text-gray-400" />
          <span className="text-xs text-gray-400 mt-1">Search</span>
        </Link>

        <Link href="/movies" className="flex flex-col items-center">
          <Film size={22} className="text-gray-400" />
          <span className="text-xs text-gray-400 mt-1">Movies</span>
        </Link>

        <Link href="/tv" className="flex flex-col items-center">
          <Tv size={22} className="text-gray-400" />
          <span className="text-xs text-gray-400 mt-1">TV</span>
        </Link>

        <Link href="/settings" className="flex flex-col items-center">
          <Settings size={22} className="text-gray-400" />
          <span className="text-xs text-gray-400 mt-1">Settings</span>
        </Link>
      </div>
    </>
  );
}
