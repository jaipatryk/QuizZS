import Link from "next/link";
import React from "react";
import Nav from "./Nav";

function Header() {
  const session = true;

  if (session) {
    return (
      <header className="sticky bg-primary px-5 py-5 z-50 overflow-hidden">
        <div className="flex justify-between">
          <div className="text-white flex items-center space-x-6">
            <Link href="/">
              <h1 className="text-4xl font-bold">
                Quiz<span className="text-zs1green">ZS</span>
              </h1>
            </Link>
            <div className="border-gray-700 border-r-2 h-full"></div>
            <Nav />
          </div>
        </div>
      </header>
    );
  } else {
    return (
      <header>
        <h1 className="text-4xl">Header</h1>
      </header>
    );
  }
}

export default Header;
