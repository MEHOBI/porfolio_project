import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-10 py-14 sm:py-0 sm:px-28 bg-black text-white h-max sm:h-[50vh] flex flex-col items-start justify-center">
      <h1 className="text-[42px]">
        Have an idea?{" "}
        <span className="underline block mb-5">Let’s talk about it</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full mt-14 style_new">
        <div>
          <span className="flex flex-col items-start justify-start">
            <Link to="mailto:realhenryiyke@gmail.com" className="mb-5">
              realhenryiyke@gmail.com
            </Link>
            <span className="text-slate-500">
              Ikeja, <br /> Lagos, Nigeria
            </span>
          </span>
        </div>

        <div className="grid grid-cols-3 mt-8 sm:mt-0">
          <span>LinkedIn</span>
          <span>Instagram</span>
          <span>Dribble</span>
          <span>Github</span>
          <span>Pinterest</span>
          <span>Youtube</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
