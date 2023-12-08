'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { BiShow } from "react-icons/bi";
import { GrHide } from "react-icons/gr";
import { MdOutlineLock, MdOutlineMailOutline } from "react-icons/md";
import Button from "./Button";

const Login_Left = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div className="bg-white w-full h-full">
      {/* Header */}
      <div className="flexCenter relative my-2">
        <div className="flex-col">
          <p className="text-blue-600 text-[14px] font-semibold py-1 flex-col flexCenter mt-3 cursor-pointer">
            <Link href="/" className="flex-col">
              Personnel Portal
            </Link>
          </p>
          <div className="h-1 mt-2 w-36 bg-blue-600"></div>
        </div>
        <p className="text-gray-700 text-[14px] px-4 cursor-pointer">
          <Link href="/">Student Portal</Link>
        </p>
      </div>

      {/* Login Prompt */}
      <div className="flex flex-col flexCenter padding-container mx-32 my-[6rem]">
        <div className="flex-col flexCenter">
          <Image src="/logo.png" alt="Campus Logo" width={120} height={120} />
          <h1 className="bold-28 mt-2">Welcome to CliniTrak</h1>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-bold leading-6 text-gray-900">
                Email
              </label>
              <div>
                <MdOutlineMailOutline className="absolute mt-[8px] ml-[11px]" size={20} />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  required
                  className="block w-full rounded-sm border-0 py-1.5 pl-10 text-gray-900 bg-gray-200 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-bold leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div>
                <MdOutlineLock className="absolute mt-[8px] ml-[11px]" size={20} />
                <input
                  id="password"
                  name="password"
                  type={passwordVisible ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  required
                  className="block w-full rounded-sm border-0 pt-1.5 pb-3 pl-10 text-gray-900 bg-gray-200 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {passwordVisible ? (
                  <BiShow
                    className="relative mt-[-28px] ml-[329px] cursor-pointer"
                    size={20}
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <GrHide
                    className="relative mt-[-28px] ml-[329px] cursor-pointer"
                    size={20}
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
            </div>

            <div>
              <Link href="/dashboard">
                <button
                  className="flexCenter rounded-md border btn_blue_lg"
                  type="submit"
                >
                  <label className=" text-white whitespace-nowrap cursor-pointer text-sm">Sign In</label>
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login_Left