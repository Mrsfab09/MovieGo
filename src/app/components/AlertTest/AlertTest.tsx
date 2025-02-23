"use client";

import { AlertDescription } from "@/components/ui/alert";
import { AlertTitle } from "@/components/ui/alert";
import { Alert } from "@/components/ui/alert";

export function AlertTest() {
  return (
    <Alert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>nie zalogowany</AlertDescription>
    </Alert>
  );
}
