import React from "react";
import SigninButton from "./SigninButton";
import LoginButton from "./LoginButton";
import Hamburger from "./Hamburger";
import { cookies } from "next/headers";

function RightNav() {
  const cookiesList = cookies();

  if (cookiesList.get("session")?.value === "true") {
    return (
      <div className="flex space-x-5 items-center relative">
        <Hamburger />
      </div>
    );
  }
  return (
    <div className="flex space-x-5 items-center">
      <LoginButton />
      <SigninButton />
    </div>
  );
}

export default RightNav;
