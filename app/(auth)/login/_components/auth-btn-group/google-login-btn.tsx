"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export const GoogleLoginBtn = () => {
  return (
    <Button
      onClick={() => {
        signIn("google", { callbackUrl: "/dashboard" });
      }}
    >
      Login with Google
    </Button>
  );
};
