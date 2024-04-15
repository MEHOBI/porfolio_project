import React from "react";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import CountUp from "react-countup";

const Services = () => {
  return (
    <section className="my-8 sm:my-28 px-8 sm:px-28 h-max pt-7 sm:pt-28 grid grid-cols-1 sm:grid-cols-2">
      <div className="flex items-center justify-between flex-col pt-16`">
        <div className="w-full flex items-center justify-start gap-4">
          <span className="p-2 bg-black rounded-full text-white">
            <TbDeviceDesktopCode />
          </span>
          <div className="flex items-start justify-start flex-col gap-[8px]">
            <span className="text-[20px] font-[500]">UI/UX Design</span>
            <span>Design a website or app with Figma</span>
          </div>
        </div>
        <div className="w-full flex items-center justify-start gap-4">
          <span className="p-2 bg-black rounded-full text-white">
            <FaLaptopCode />
          </span>
          <div className="flex items-start justify-start flex-col gap-[8px]">
            <span className="text-[20px] font-[500]">Front-End Develop</span>
            <span>Coding front-end with Tailwind CSS, React JS</span>
          </div>
        </div>
        <div className="w-full flex items-center justify-start gap-4">
          <span className="p-2 bg-black rounded-full text-white">
            <FaLaptopCode />
          </span>
          <div className="flex items-start justify-start flex-col gap-[8px]">
            <span className="text-[20px] font-[500]">Back-End Develop</span>
            <span>Coding back-end with PHP Laravel</span>
          </div>
        </div>
      </div>
      <div className="flex items-start flex-col justify-start">
        <span className="text-[20px] mt-8 sm:mt-0 mb-8">Services</span>
        <h1 className="text-[42px] font-[500] mb-10">My Awesome Service</h1>
        <p className="mb-20">
          Bring your digital vision to life through a seamless fusion of
          creativity and functionality. As a dedicated UI designer and web
          developer,
          <br />
          <br />I offer a range of services that elevate your online presence.
        </p>
        <div className="flex items-center justify-center gap-20">
          <div className="flex flex-col items-start justify-start">
            <span className="text-[35px] font-[500]">
              <CountUp start={0} end={15} duration={2} />+
            </span>
            <span>Projects Completed</span>
          </div>
          <div className="flex flex-col items-start justify-start">
            <span className="text-[35px] font-[500]">1+</span>
            <span>Year Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
