"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";

interface AuthProvidersProps {
  children: React.ReactNode;
}

export const AuthProviders: React.FC<AuthProvidersProps> = ({ children }) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
};
