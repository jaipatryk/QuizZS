"use client";

import React, { Suspense } from "react";
import SigninButton from "./SigninButton";
import LoginButton from "./LoginButton";
import Hamburger from "./Hamburger";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useCookies } from "react-cookie";
import Cookies from "js-cookie";
import dynamic from "next/dynamic";

function RightNav() {
  const session = useSelector((state: RootState) => state.session);

  console.log(session.session);

  if (session.session === true) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className='flex space-x-5 items-center relative'>
          <Hamburger />
        </div>
      </Suspense>
    );
  } else if (session.session === false) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className='flex space-x-5 items-center'>
          <LoginButton />
          <SigninButton />
        </div>
      </Suspense>
    );
  } else {
    return <div className='flex space-x-5 items-center w-80 bg-gray-300'></div>;
  }
}

export default dynamic(() => Promise.resolve(RightNav), {
  ssr: false,
});

// export default RightNav;
