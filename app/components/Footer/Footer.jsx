import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div class="bg-white pt-4 sm:pt-10 lg:pt-12">
      <footer class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="flex flex-col items-center border-t pt-6">
          <nav class="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
            <Link
              href="#"
              class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              Home
            </Link>
            <Link
              href="#"
              class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              About
            </Link>
            <Link
              href="#"
              class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              Calls
            </Link>
            <Link
              href="#"
              class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              Blog
            </Link>
          </nav>
        </div>

        <div class="py-8 text-center text-sm text-gray-400">
          Next js - MongoDB App
        </div>
      </footer>
    </div>
  );
};

export default Footer;
