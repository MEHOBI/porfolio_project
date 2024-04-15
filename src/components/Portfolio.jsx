import React, { useState } from "react";
import project from "../assets/project.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import { FaDribbble } from "react-icons/fa";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";

const Portfolio = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (scrollOffset) => {
    setScrollPosition(scrollPosition + scrollOffset);
  };

  const showBackArrow = scrollPosition > 0;

  return (
    <section className="mt-10 mb-20 sm:mb-0 sm:mt-20 h-full">
      <span className="text-[20px] font-[400] px-28">Portfolio</span>
      <div className="flex flex-col sm:flex-row items-center justify-between px-28">
        <h1 className="text-[42px] w-[400px] leading-normal">
          Let's have a look at my portfolio
        </h1>
        <span className="underline font-[500] mt-5 sm:mt-0">See All</span>
      </div>
      <div className="relative">
        {showBackArrow && (
          <button
            className="absolute left-5 top-[26%] z-20 text-[50px] text-slate-700 shadow-black shadow-2xl rounded-full"
            onClick={() => handleScroll(-411)} // Adjust the value based on your card width
          >
            <FaCircleArrowLeft />
          </button>
        )}
        <div
          className="pl-28 mt-14 flex gap-[40px] min-w-[1024px] overflow-x-auto z-10"
          style={{ transform: `translateX(${-scrollPosition}px)` }}
        >
          <div className="card w-full sm:w-[411px]">
            <img
              src={project}
              alt="done"
              className="rounded-xl w-full h-[280px]"
            />
            <div className="mt-8">
              <div>
                <FaDribbble className="mb-2" />
                <span className="my-2">Miaageha</span>
              </div>
              <span>Illustration Design Concept</span>
            </div>
          </div>
          {/* Repeat other card elements as needed */}
          {/* Add more cards with different images and content */}
          <div className="card w-full sm:w-[411px]">
            <img
              src={project2}
              alt="done"
              className="rounded-xl w-full h-[280px]"
            />
            <div className="mt-8">
              <div>
                <FaDribbble />
                <span className="my-2">Miaageha</span>
              </div>
              <span>Earthquake UI App Redesign</span>
            </div>
          </div>
          <div className="card w-full sm:w-[411px]">
            <img
              src={project3}
              alt="done"
              className="rounded-xl w-full h-[280px]"
            />
            <div className="mt-8">
              <div>
                <FaDribbble />
                <span className="my-2">Miaageha</span>
              </div>
              <span>Company Data Monitoring App</span>
            </div>
          </div>
        </div>
        <button
          className="absolute right-5 top-[26%] z-20 text-[50px] text-slate-700 shadow-black shadow-2xl rounded-full"
          onClick={() => handleScroll(411)} // Adjust the value based on your card width
        >
          <FaCircleArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
