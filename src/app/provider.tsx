"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";

interface CustomProvidersProps {
  children: React.ReactNode;
}

export const CustomProviders: React.FC<CustomProvidersProps> = ({ children }) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
};
