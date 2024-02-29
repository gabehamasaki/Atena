import NextAuth from "next-auth";
import { authConfig } from "./auth.options";

export type { Session, User } from "next-auth";

import type { DefaultSession, User } from 'next-auth'


declare module 'next-auth' {
  export interface Session extends DefaultSession {
    user: User
  }
}


export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
  unstable_update: update,
} = NextAuth(authConfig);
