"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { SiWebmoney } from "react-icons/si";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className=" fixed w-full z-20 top-0 start-0 bg-black/90 backdrop-blur-3xl ">
        <div className=" min-w-full flex flex-wrap items-center justify-between mx-auto px-10 py-4">
          <div className="flex items-start space-x-3 ">
        
          <SiWebmoney className=' text-white  w-8 h-8' />
            <span className="self-center text-2xl font-semibold text-white ">SpendSage</span>
          </div>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <UserButton afterSignOutUrl='/' />
            <button
              onClick={toggleMenu}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-normal border border-gray-100 rounded-lg md:space-x-10  md:flex-row md:mt-0 md:border-0  ">
              <li>
                <Link href={'/dashboard'} className="block py-2 px-3 hover:text-white  rounded md:bg-transparent text-zinc-300 md:p-0 ">Home</Link>
              </li>
              <li>
                <Link href={'/dashboard/budgets'} className="block py-2 px-3 text-zinc-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0  ">Budgets</Link>
              </li>
              <li>
                <Link href={'/dashboard/expenses'} className="block py-2 px-3 text-zinc-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0  ">Expenses</Link>
              </li>
              <li>
                <Link href={'/dashboard/upgrade'} className="block py-2 px-3 text-zinc-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0  ">Upgrade</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;


