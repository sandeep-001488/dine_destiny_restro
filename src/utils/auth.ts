// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { getServerSession, NextAuthOptions, User } from "next-auth";
// import GoogleProfile from "next-auth/providers/google";
// import { prisma } from "./connect";

// declare module "next-auth" {
//   interface Session {
//     user: User & {
//       isAdmin: boolean;
//     };
//   }
// }

// declare module "next-auth/jwt" {
//   interface Jwt {
//     isAdmin: boolean;
//   }
// }

// export const authOptions: NextAuthOptions = {
//   adapter: PrismaAdapter(prisma),
//   session: {
//     strategy: "jwt",
//   },
//   providers: [
//     GoogleProfile({
//       clientId: process.env.GOOGLE_ID!,
//       clientSecret: process.env.GOOGLE_SECRET!,
//     }),
//   ],
//   callbacks: {
//     async session({ token, session }) {
//       if (token) {
//         session.user.isAdmin = token.isAdmin as boolean;
//       }
//       return session;
//     },
//     async jwt({ token }) {
//       const userInDb = await prisma.user.findUnique({
//         where: {
//           email: token.email!,
//         },
//       });
//       token.isAdmin = userInDb?.isAdmin!;
//       return token;
//     },
//   },
// };

// export const getAuthSession = () => getServerSession(authOptions);


import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { getServerSession, NextAuthOptions, User } from "next-auth";
import GoogleProfile from "next-auth/providers/google";
import { prisma } from "./connect";

declare module "next-auth" {
  interface Session {
    user: User & {
      isAdmin: boolean;
    };
  }
}

declare module "next-auth/jwt" {
  interface Jwt {
    isAdmin: boolean;
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProfile({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.isAdmin = token.isAdmin as boolean; // Safe handling
      }
      return session;
    },
    async jwt({ token }) {
      const userInDb = await prisma.user.findUnique({
        where: {
          email: token.email ?? "", // Nullish coalescing for safe fallback
        },
      });
      token.isAdmin = userInDb?.isAdmin ?? false; // Safe handling without non-null assertion
      return token;
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
