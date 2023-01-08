import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import RightNav from "./RightNav";
import Cookies from "js-cookie";

function Header() {
  Cookies.set("session", "true");

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
        <RightNav />
      </div>
    </header>
  );
}

export default Header;
