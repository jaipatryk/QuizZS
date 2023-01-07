import Link from "next/link";
import React from "react";
import LoginButton from "./LoginButton";
import SigninButton from "./SigninButton";
import Nav from "./Nav";
import Hamburger from "./Hamburger";

function Header() {
  const session = true;

  return (
    <header className='sticky overflow-hidden px-5 py-4 z-40 border-b-2 border-b-quizLetGray select-none'>
      <div className='flex justify-between'>
        <div className='text-white flex items-center space-x-6'>
          <Link href='/' className='hover:brightness-90'>
            <h1 className='text-3xl font-bold'>
              Quiz<span className='text-zs1green'>ZS</span>
            </h1>
          </Link>
          <div className='border-gray-700 border-r-2 h-full'></div>
          <Nav />
        </div>
        {!session ? (
          <div className='flex space-x-5 items-center'>
            <LoginButton />
            <SigninButton />
          </div>
        ) : (
          <div className='flex space-x-5 items-center relative'>
            <Hamburger />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
