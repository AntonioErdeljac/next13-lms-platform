"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export const LogoutBtn = () => {
  return (
    <Button
      variant={"destructive"}
      onClick={() => {
        signOut();
      }}
    >
      Logout
    </Button>
  );
};
