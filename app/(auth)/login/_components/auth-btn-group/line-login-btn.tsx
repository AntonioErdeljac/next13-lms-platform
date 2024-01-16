"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export const LineLoginBtn = () => {
  return (
    <Button
      onClick={() => {
        signIn("line", { callbackUrl: "/" });
      }}
    >
      Login with Line
    </Button>
  );
};
