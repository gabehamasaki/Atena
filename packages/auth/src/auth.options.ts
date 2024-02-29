import type { NextAuthConfig, Session } from "next-auth";
import type { GoogleProfile } from "next-auth/providers/google";
import Google from "next-auth/providers/google";

import { drizzleAuthAdapter } from "./drizzle.adpater";

export const authConfig = {
  adapter: drizzleAuthAdapter,
  providers: [Google({
    authorization: {
      params: {
        prompt: 'consent',
        access_type: 'offline',
        response_type: 'code',
      },
    },
  })],
  pages: {
    signIn: '/auth/sign-in',
    error: '/auth/error',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    signIn({ account, profile }) {
      if (account?.provider === 'google') {
        const googleProfile = profile as GoogleProfile
        const [, emailDomain] = googleProfile.email.split('@')

        if (!emailDomain) {
          return false
        }

        return googleProfile.email_verified
      }

      return false
    },
    jwt({ token, session, trigger }) {
      function isSessionAvailable(session: unknown): session is Session {
        return !!session
      }

      if (trigger === 'update' && isSessionAvailable(session)) {
        token.name = session.user.name
      }

      return token
    },
    session({ session, ...params }) {
      if ('token' in params && session.user) {
        session.user.id = params.token.sub!
      }

      return session
    },
  }
} satisfies NextAuthConfig