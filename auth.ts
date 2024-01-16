/**
 * NextAuth's config options
 * @see https://authjs.dev/guides/
 */

import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [Google],
});
