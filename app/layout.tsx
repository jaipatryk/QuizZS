import React from "react";
import "../styles/globals.css";
import Header from "./(Header)/Header";
import { Poppins } from "@next/font/google";
import { Providers } from "./provider";

const poppinsRegular = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className={`${poppinsRegular.className} bg-primary`}>
        <Providers>
          {/* @ts-ignore */}
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
