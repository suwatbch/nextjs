import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          console.log(credentials?.username);
          console.log(credentials?.password);
          if (credentials?.username === "max" && credentials?.password === "123") {
            const user = { id: 1, name: credentials?.username };
            return user;
          }
        } catch (error) {
          console.error("Error during authentication:", error);
        }
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
