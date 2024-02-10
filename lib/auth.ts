import prisma from "@/lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials";

import { NextAuthOptions } from "next-auth";
import bcrypt from "bcryptjs";
import _ from "lodash";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<any> {
        // check to see if email and password is there
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please enter an email and password");
        }
        try {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          });

          if (!user || !user?.password) {
            throw new Error("Incorrect email or password");
          }

          // check to see if password matches
          const passwordMatch = await bcrypt.compareSync(
            credentials.password,
            user.password
          );

          // if password does not match
          if (!passwordMatch) {
            throw new Error("Incorrect email or password");
          }

          const removedSensitiveData = _.omit(user, ["password"]);

          return {
            id: removedSensitiveData.id,
            username: removedSensitiveData.username,
            role: removedSensitiveData.role,
            email: removedSensitiveData.email,
          };
        } catch (error) {
          console.log(error);
          throw new Error("Something went wrong");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      /* Step 1: update the token based on the user object */
      if (user) {
        token.role = user.role;
        token.user = user;
        token.campus = ["c1", "c2", "c3", "c4", "c5", "c6"];
      }
      return token;
    },
    session({ session, token }: any) {
      //  Step 2: update the session.user based on the token object */
      if (token && session.user) {
        session.user.role = token.role;
        session.user = token.user;
        session.user.campus = token.campus;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
  session: {
    strategy: "jwt",
    maxAge: 86400,
  },
  debug: process.env.NODE_ENV === "development",
};
