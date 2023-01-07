import Link from "next/link";
import React from "react";

function SigninButton() {
  return (
    <Link href='#'>
      <div
        className='bg-zs1green text-white px-4 py-2 rounded-md font-medium
      hover:brightness-90 transition-all'>
        Zarejestruj się
      </div>{" "}
    </Link>
  );
}

export default SigninButton;
