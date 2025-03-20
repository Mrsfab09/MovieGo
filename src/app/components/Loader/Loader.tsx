"use client";
import { Loader2 } from "lucide-react";

/*
******************************************************
 nazwa funkcji: AuthLoading
 opis: Komponent wyswietlajacy animacje ladowania po zalogowaniu, narazie nie używany 
*****************************************************
*/

export default function AuthLoading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-neutral-900 text-white">
      <div className="flex flex-col items-center gap-4 animate-fade">
        <Loader2 className="h-12 w-12 animate-spin text-blue-500" />
        <p className="text-lg font-semibold">Logowanie...</p>
      </div>
    </div>
  );
}
