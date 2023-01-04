/* eslint-disable @next/next/no-head-element */

import "./globals.scss";
import NavMenu from "./(Menu)/page";

import localFont from "@next/font/local";

const HurmeGeometricSans = localFont({
  src: "../asset/Hurme Geometric Sans No.1/HurmeGeometricSans1.otf",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>QuizZS</title>
      </head>
      <body className={HurmeGeometricSans.className}>
        <div className={"wrapper"} style={{ position: "relative" }}>
          <NavMenu pagePath={"home"} />
          <div className="page-content" style={{ paddingTop: 80 }}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
