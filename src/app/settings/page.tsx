"use client";

import { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";

export default function Settings() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      Settings
    </div>
  );
}
