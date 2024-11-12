import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          console.log(credentials?.username);
          console.log(credentials?.password);
          const user = { id: "1", name: "name", email: "max@example.com" }
          if (user) 
            return user
          else
            return null

        } catch (error) {
          console.error("Error during authentication:", error);
        }
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
