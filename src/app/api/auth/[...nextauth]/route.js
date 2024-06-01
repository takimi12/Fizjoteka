import CredentialsProvider from "next-auth/providers/credentials";


import NextAuth from "next-auth";
import bcrypt from "bcryptjs";
import User from "../../../../../backend/models/user";
import dbConnect from "../../../../../backend/config/dbConnect";


const handler= NextAuth( {
    session: {
      strategy: "jwt",
    },
    providers: [
      CredentialsProvider({
        async authorize(credentials, req) {
          dbConnect();

          const { email, password } = credentials;

          const user = await User.findOne({ email }).select("+password");

          if (!user) {
            throw new Error("Invalid Email or Password");
          }

          const isPasswordMatched = await bcrypt.compare(
            password,
            user.password
          );

          if (!isPasswordMatched) {
            throw new Error("Invalid Email or Password");
          }

          return user;
        },
      }),
    ],
    callbacks: {
      jwt: async ({ token, user }) => {
        user && (token.user = user);

        return token;
      },
      session: async ({ session, token }) => {
        session.user = token.user;

        // delete password from session
        delete session?.user?.password;

        return session;
      },
    },
    pages: {
 error: "/auth/error",
    },
    secret: process.env.NEXTAUTH_SECRET,
  });
  export { handler as GET, handler as POST };
// Strona admina
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

export default function AdminPage() {
  const { data: session } = useSession();

  const logoutHandler = () => {
    signOut({ callbackUrl: '/login' });
  };

  const isAdmin = session?.user?.role === 'admin';

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          {isAdmin && (
            <li>
              <Link href="/admin">Admin</Link>
            </li>
          )}
          {session ? (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          ) : (
            <li>
              <Link href="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}
