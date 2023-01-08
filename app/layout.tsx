import React from "react";
import "../styles/globals.css";
import Header from "./(Header)/Header";
import { Providers } from "./provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className={` bg-primary`}>
        <Providers>
          {/* @ts-ignore */}
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
