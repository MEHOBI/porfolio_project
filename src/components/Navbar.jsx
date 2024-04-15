import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { VscMenu } from "react-icons/vsc";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-[25px] px-[25px] sm:py-12 sm:px-28 flex items-center justify-between font-[400]">
      <Link
        to="mailto:juadebgabriel@gmail.com"
        className="flex items-center justify-between gap-[10px] hover:underline underline-offset-2 duration-100 ease-linear"
      >
        <AiOutlineMail />
        <span> realhenryiyke@gmail.com</span>
      </Link>
      <div className="sm:hidden">
        <VscMenu className="text-[25px] cursor-pointer" onClick={toggleMenu} />
        {isMenuOpen && (
          <ul className="w-[70%] h-[480px] absolute top-[70px] right-0 bg-white border border-gray-200 rounded-md flex items-center justify-center space-y-10 flex-col gap-2 py-2 px-4">
            <Link
              to="/"
              className="hover:underline underline-offset-2 duration-100 ease-linear"
            >
              <li>About</li>
            </Link>
            <Link
              to="/"
              className="hover:underline underline-offset-2 duration-100 ease-linear"
            >
              <li>Services</li>
            </Link>
            <Link
              to="/"
              className="hover:underline underline-offset-2 duration-100 ease-linear"
            >
              <li>Portfolio</li>
            </Link>
            <Link
              to="/"
              className="hover:underline underline-offset-2 duration-100 ease-linear"
            >
              <li>Contact</li>
            </Link>
          </ul>
        )}
      </div>
      <ul className="hidden sm:flex items-center justify-between gap-5">
        <Link
          to="/"
          className="hover:underline underline-offset-2 duration-100 ease-linear"
        >
          <li>About</li>
        </Link>
        <Link
          to="/"
          className="hover:underline underline-offset-2 duration-100 ease-linear"
        >
          <li>Services</li>
        </Link>
        <Link
          to="/"
          className="hover:underline underline-offset-2 duration-100 ease-linear"
        >
          <li>Portfolio</li>
        </Link>
        <Link
          to="/"
          className="hover:underline underline-offset-2 duration-100 ease-linear"
        >
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
