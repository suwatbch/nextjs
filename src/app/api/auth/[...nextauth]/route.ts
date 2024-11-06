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
          const res = await fetch("https://melivecode.com/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
          });

          const response = await res.json();

          if (res.ok && response.status === "ok") {
            return response.user;
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
