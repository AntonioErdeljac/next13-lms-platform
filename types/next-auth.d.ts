/**
 * This module extends the types and interfaces provided by the NextAuth library.
 * It defines additional properties for the `Session` and `JWT` objects, and
 * extends the `Profile` interface to include properties specific to the 42 School provider.
 * See: https://next-auth.js.org/getting-started/typescript
 * Note: Docs not updated on how to augment JWT
 */
import NextAuth, { DefaultSession, Profile } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name: string;
      email: string;
      image: string;
      userId: string;
    } & DefaultSession["user"];
  }
}
