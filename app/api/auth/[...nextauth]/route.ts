import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  jwt: {
    maxAge: 60 * 60 * 24 * 365,
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        const userId = credentials.userId;
        const firstName = credentials.firstName;
        const lastName = credentials.lastName;
        const email = credentials.email;
        const isAdmin = credentials.isAdmin;
        console.log(`Returning from authorize:`, {
          id: userId,
          firstName: firstName,
          lastName: lastName,
          email: email,
        });
        return {
          id: userId,
          firstName: firstName,
          lastName: lastName,
          email: email,
          isAdmin: isAdmin,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/login", // Direct users to your custom login page
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.isAdmin = user.isAdmin;
        token.email = user.email;
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user.id = token.id as string;
      session.user.firstName = token.firstName as string;
      session.user.lastName = token.lastName as string;
      session.user.isAdmin = token.isAdmin as boolean;
      session.user.email = token.email as string;
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 365,
  },
});

export { handler as GET, handler as POST };
