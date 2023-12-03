import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 py-7 text-white">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href="/">
          <Image src="/jsm-logo.svg" alt="Logo" width={55} height={40} />
        </Link>

        <Image
          src="/hamburger-menu.svg"
          alt="menu"
          width={30}
          height={30}
          className="block md:hidden"
        />

        <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
          <li className="body-text text-gradient_blue-purple !font-bold ">
            <Link href="/" target="_blank">
              Next.Js 13.4 Course
            </Link>
          </li>
          <li className="body-text !font-normal ">
            <Link href="/" target="_blank">
              Master Class
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
