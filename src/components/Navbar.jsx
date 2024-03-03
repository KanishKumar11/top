"use client";
import React from "react";
import { Button, Img, List, Text } from "@/components";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = React.useState(false);
  return (
    <header className="bg-gray-100 pt-5 pb-10 flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full px-20 ">
      <div className="navbar flex flex-row justify-between items-center w-full max-w-7xl mx-auto">
        <div className="navbar-start flex-row flex items-center ">
          <div className="dropdown gap-3 flex lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost  text-black-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="black"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => setActive(!active)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {active && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow absolute rounded-box top-16 w-52 bg-slate-200 py-5 !text-black-900"
              >
                <li>
                  <a>Pricing</a>
                </li>
                <li>
                  <a>For Creators</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Earnings Calculator</a>
                </li>
              </ul>
            )}
          </div>
          <Link href="/">
            <Img
              className="h-[37px] ml-5"
              src="/images/img_linkimage.svg"
              alt="linkimage"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 flex-row flex gap-5 text-black-900 ">
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <details className="">
                <summary>For Creators</summary>
                <ul className="p-2 bg-slate-200 absolute">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Earnings Calculator</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex flex-row gap-3.5 items-center justify-between ">
            <Button
              className="border border-gray-400 border-solid cursor-pointer min-w-[89px] sm:min-w-[60px] rounded-lg  text-base text-center"
              color="white_A700"
              size="xs"
            >
              Login
            </Button>
            <Button
              className="border border-gray-900 border-solid cursor-pointer font-bold min-w-[120px] block sm:hidden rounded text-[15.63px] text-center"
              color="white_A700"
            >
              Sign up free
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
