"use client";

import { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";

export default function Settings() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 md:ml-16 bg-neutral-950 min-h-screen">
        Settings
      </div>
    </>
  );
}
