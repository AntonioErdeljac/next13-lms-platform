"use client";

import { SessionProvider } from "next-auth/react";

export const NextAuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextAuthProvider>
        {children}
    </NextAuthProvider>
  );
};
