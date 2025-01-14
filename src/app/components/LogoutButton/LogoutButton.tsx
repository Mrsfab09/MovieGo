"use client";

import { useState } from "react";

export function LogoutButton() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    const response = await fetch("/logout", {
      method: "POST",
    });

    if (response.ok) {
      // Redirect to login page after logout
      window.location.href = "/login";
    } else {
      setLoading(false);
      console.log("Failed to log out");
    }
  };

  return (
    <button onClick={handleLogout} disabled={loading}>
      {loading ? "Logging out..." : "Log out"}
    </button>
  );
}
