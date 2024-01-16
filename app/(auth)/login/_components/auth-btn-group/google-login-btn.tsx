"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export const GoogleLoginBtn = () => {
  return (
    <Button
      onClick={() => {
        signIn("google", { callbackUrl: "/" });
      }}
    >
      Login with Google
    </Button>
  );
};
