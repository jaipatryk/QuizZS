"use client";

import Link from "next/link";
import React, { useState } from "react";

function LoginComponent() {
  const [loginInput, setLoginInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [loginError, setLoginError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  return (
    <div className='loginWrapper'>
      <div className='flex flex-col justify-center space-y-8'>
        <h1 className='text-center font-semibold uppercase'>Login</h1>
        <form className='flex flex-col justify-center space-y-8 '>
          <div className='space-y-6 flex flex-col w-full'>
            <div
              className={`${
                loginError ? "errorInputWrapper" : "loginInputWrapper"
              }`}>
              <input
                type='text'
                className={`loginInput${
                  loginInput ? " border-yellow-300" : " border-white"
                }`}
                placeholder='Nazwa użytkownika/Email'
                value={loginInput}
                onChange={(e) => {
                  setLoginInput(e.target.value);
                  setLoginError("");
                }}
                required></input>
            </div>
            <div
              className={`${
                passwordError ? "errorInputWrapper" : "loginInputWrapper"
              }`}>
              <input
                type='password'
                className={`loginInput${
                  passwordInput ? " border-yellow-300" : " border-white"
                }`}
                placeholder='Hasło'
                value={passwordInput}
                onChange={(e) => {
                  setPasswordInput(e.target.value);
                  setPasswordError("");
                }}
                required></input>
            </div>
          </div>
          <button type='submit' className='loginButton'>
            Zaloguj się
          </button>
          <Link href='#' className='forgetButton'>
            Zapomniałeś hasła?
          </Link>
          <Link href='#' className='loginRegisterButton'>
            Nie masz konta? <br />
            Stwórz konto
          </Link>
          <div
            onClick={() => {
              setLoginError("asd");
              setPasswordError("asd");
            }}>
            error
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginComponent;
