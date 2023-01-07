"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function LoginButton() {
  const pathname = usePathname();

  return (
    <Link
      href='#'
      className={`nav-link ${pathname === "/oauth/login" && "active"}`}>
      <div className='text-white px-4 py-2 rounded-md font-medium bg-primary'>
        Zaloguj się
      </div>
    </Link>
  );
}

export default LoginButton;
