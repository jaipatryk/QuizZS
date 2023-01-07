"use client";

import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

function Hamburger() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {isOpen ? (
        <AiOutlineClose
          onClick={() => setIsOpen(!isOpen)}
          size={30}
          color='#fff'
          className='cursor-pointer'
        />
      ) : (
        <GiHamburgerMenu
          onClick={() => setIsOpen(!isOpen)}
          size={30}
          color='#fff'
          className='cursor-pointer'
        />
      )}

      {isOpen && (
        <div className='fixed top-14 right-0 bg-primary w-auto h-auto border-2 border-white rounded z-50'>
          <div className='flex flex-col items-center justify-center h-full py-4'>
            <div className='dropdownElement'>Profil</div>
            <div className='dropdownElement'>Wyloguj</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Hamburger;
