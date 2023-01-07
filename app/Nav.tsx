"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function Nav() {
  const pathname = usePathname();

  return (
    <nav className="h-full">
      <ul className="flex items-center space-x-10 h-full">
        <Link href="/" className={`${pathname === "/" && "active"} nav-link`}>
          <li>Strona główna</li>
        </Link>
        <Link
          href="#"
          className={`${pathname === "/quizes" && "active"} nav-link`}
        >
          <li>Quizy</li>
        </Link>
        <Link
          href="#"
          className={`${pathname === "/classification" && "active"} nav-link`}
        >
          <li>Ranking</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
