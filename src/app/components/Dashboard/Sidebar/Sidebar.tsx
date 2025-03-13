"use client";

import React from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
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
  X,
} from "lucide-react";
import SidebarItem from "./SidebarItem";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { isLoaded, user } = useUser();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-neutral-950/80 z-40"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 bottom-0 left-0 w-16 bg-neutral-950/50 border-r border-neutral-800 z-50 flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex justify-center items-center h-16 border-b border-neutral-800">
          <Link href="/" className="text-white font-bold">
            <Film size={28} className="text-red-500" />
          </Link>
        </div>

        <div className="md:hidden absolute top-4 right-3" onClick={onClose}>
          <X size={20} className="text-gray-400" />
        </div>

        <nav className="flex-1 py-6 flex flex-col items-center space-y-5">
          <SidebarItem
            icon={<Home size={24} />}
            label="Home"
            href="/"
            active={true}
          />
          <SidebarItem
            icon={<Search size={24} />}
            label="Search"
            href="/search"
          />
          <SidebarItem
            icon={<Film size={24} />}
            label="Movies"
            href="/movies"
          />
          <SidebarItem icon={<Tv size={24} />} label="TV Shows" href="/tv" />
          <SidebarItem
            icon={<TrendingUp size={24} />}
            label="Trending"
            href="/trending"
          />
          <SidebarItem
            icon={<Calendar size={24} />}
            label="Coming Soon"
            href="/upcoming"
          />
          {isLoaded && user && (
            <SidebarItem
              icon={<Bookmark size={24} />}
              label="My List"
              href="/favorites"
            />
          )}
        </nav>

        <div className="py-6 flex flex-col items-center space-y-5">
          <SidebarItem
            icon={<Settings size={24} />}
            label="Settings"
            href="/settings"
          />
          {isLoaded && user ? (
            <SidebarItem
              icon={<LogOut size={24} />}
              label="Logout"
              href="/logout"
            />
          ) : (
            <p>Loading or no user found</p>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
