/**
 * NextAuth's config options
 * @see https://authjs.dev/guides/
 */

import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google],
  callbacks: {
    async session({session, user}) {
      if (user && session.user) {
        session.user.userId = user.id
      }
      return session
  }},
});
