import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-white lg:pb-2">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <header className="flex items-center justify-between py-4 md:pt-8">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-md font-bold text-black hover:text-gray-500"
            >
              Next.js - MongoDB
            </Link>
            <div className="ml-10 hidden md:block">
              <nav className="space-x-4">
                <Link
                  href="/"
                  className="text-md font-semibold text-black hover:text-gray-500"
                >
                  Home
                </Link>
                <Link
                  href="/"
                  className="text-md font-semibold text-black hover:text-gray-500"
                >
                  About
                </Link>
                <Link
                  href="/"
                  className="text-md font-semibold text-black hover:text-gray-500"
                >
                  Calls
                </Link>
                <Link
                  href="/"
                  className="text-md font-semibold text-black hover:text-gray-500"
                >
                  Blogs
                </Link>
              </nav>
            </div>
          </div>
          <div>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Log in
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
