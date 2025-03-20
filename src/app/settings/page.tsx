"use client";

import { ReactNode, useState } from "react";
import { Sidebar } from "../components/Dashboard/Sidebar/Sidebar";
import { UserProfile } from "@clerk/clerk-react";

/*
******************************************************
 nazwa funkcji: Settings
 opis: Komponent wyswietlajacy strone ustawień użytkownika
*****************************************************
*/

export default function Settings() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 md:ml-16">
        <div className="flex items-center justify-center mt-5 sm:mt-32 lg:mt-20">
          <UserProfile />
        </div>
        {/* <h2 className="text-3xl font-medium ml-32 mt-12 mb-10">Settings</h2> */}
        {/* <div className="flex items-center justify-between ml-32">
          <div>
            <p>Profile</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mx-auto mt-10 overflow-hidden gap-5">
          <Image
            width={"40"}
            height={"40"}
            src={
              user?.imageUrl && user.imageUrl !== ""
                ? user.imageUrl
                : "/default-avatar.png"
            }
            alt="Profile Picture"
            className="w-20 h-20 rounded-full"
          />
          <h3 className="text-xl">Test</h3>
        </div> */}
      </div>
    </>
  );
}
