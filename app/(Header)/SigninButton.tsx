import Link from "next/link";
import React from "react";

function SigninButton() {
  return (
    <Link href='#'>
      <div
        className='bg-zs1green text-white px-4 py-2 rounded-md font-medium
      hover:bg-yellow-300 hover:text-zs1green transition-all'>
        Zarejestruj się
      </div>
    </Link>
  );
}

export default SigninButton;
