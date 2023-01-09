"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setSession } from "../../redux/reducers/session";
import Cookies from "js-cookie";

function LoginButton() {
  const pathname = usePathname();
  const session = useSelector((state: RootState) => state.session);
  const dispatch = useDispatch();

  function handleLogin() {
    dispatch(setSession(true));
    Cookies.set("session", "true");
    location.reload();
  }

  return (
    <Link
      href='/auth/login'
      className={`nav-link${pathname === "/auth/login" && " active"}`}>
      <div
        // onClick={handleLogin}
        className='text-white px-4 py-2 rounded-md font-medium bg-primary'>
        Zaloguj się
      </div>
    </Link>
  );
}

export default LoginButton;
