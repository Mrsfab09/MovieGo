"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Home,
  Film,
  Star,
  Calendar,
  Search,
  Heart,
  Clock,
  Settings,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";

const SideBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isLoaded, user } = useUser();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navItems = [
    { href: "/", label: "Home", icon: <Home size={18} /> },
    { href: "/movies", label: "Movies", icon: <Film size={18} /> },
    { href: "/top-rated", label: "Top Rated", icon: <Star size={18} /> },
    { href: "/upcoming", label: "Upcoming", icon: <Calendar size={18} /> },
  ];

  const userNavItems = [
    { href: "/favorites", label: "Favorites", icon: <Heart size={18} /> },
    { href: "/watchlist", label: "Watchlist", icon: <Clock size={18} /> },
    { href: "/settings", label: "Settings", icon: <Settings size={18} /> },
  ];

  return (
    <>
      <nav className="bg-neutral-900 text-white shadow-md fixed w-full z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            {/* Logo and primary navigation */}
            <div className="flex items-center">
              {/* Logo */}
              <Link href="/" className="flex items-center flex-shrink-0">
                <Film className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-white">
                  MovieGo
                </span>
              </Link>

              {/* Desktop navigation */}
              <div className="hidden md:ml-6 md:flex md:space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition duration-150"
                  >
                    <span className="mr-1">{item.icon}</span>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right side of navbar */}
            <div className="flex items-center">
              {/* Search */}
              <Link
                href="/search"
                className="p-2 rounded-full hover:bg-blue-600 transition duration-150"
              >
                <Search size={20} />
              </Link>

              {/* User dropdown */}
              <div className="relative ml-4">
                {isLoaded && user ? (
                  <div>
                    <button
                      onClick={toggleDropdown}
                      className="flex items-center space-x-2 focus:outline-none"
                    >
                      <UserButton />
                      <ChevronDown size={16} className="hidden md:block" />
                    </button>

                    {/* Dropdown menu */}
                    {isDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-48 py-2 bg-neutral-800 rounded-md shadow-xl z-30">
                        <div className="px-4 py-2 border-b border-neutral-700">
                          <p className="text-sm font-medium">
                            {user.fullName || user.username}
                          </p>
                          <p className="text-xs text-gray-400 truncate">
                            {user.primaryEmailAddress?.emailAddress}
                          </p>
                        </div>

                        {userNavItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center px-4 py-2 text-sm hover:bg-blue-600 transition duration-150"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <span className="mr-2">{item.icon}</span>
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href="/sign-in"
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium bg-blue-600 hover:bg-blue-700"
                  >
                    Sign In
                  </Link>
                )}
              </div>

              {/* Mobile menu button */}
              <button
                className="ml-4 md:hidden flex items-center justify-center p-2 rounded-md hover:bg-blue-600 transition duration-150"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-neutral-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.concat(userNavItems).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 transition duration-150"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Page content wrapper - adds padding to accommodate fixed navbar */}
      <div className="pt-16">{/* Your page content goes here */}</div>
    </>
  );
};

export default SideBar;
