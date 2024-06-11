import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { SignJWT, jwtVerify } from "jose";
import { sign, verify } from "jsonwebtoken";
const secret = process.env.NEXTAUTH_SECRET;
export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const response = await axios.post(
          "https://backend.alnafaz.com/api/auth/login",
          {
            email: credentials.email,
            password: credentials.password,
          }
        );

        const user = response.data;
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          console.log(user);
          // If you return null then an error will be displayed advising the user to check their details.
          throw new Error(JSON.stringify({ errors: user, status: false }));

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  //useSecureCookies: process.env.NODE_ENV !== "development",
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token;
      }
      return token;
      //return { ...token, ...user };
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },

  pages: {
    signIn: "/signIn",
  },
});
