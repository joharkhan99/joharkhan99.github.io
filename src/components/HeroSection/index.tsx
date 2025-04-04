import React from "react";
import { HiArrowLongDown } from "react-icons/hi2";
import ZoomName from "../ZoomName//index.tsx";

const HeroSection = () => {
  return (
    <div className="bg-[#222222]">
      <span className="absolute hidden md:block bottom-[54px] left-[63px] z-10">
        <HiArrowLongDown color="white" className="opacity-50" size={24} />
      </span>
      <div className="absolute hidden md:block -bottom-2 left-0 z-10">
        <svg id="rotatingText" viewBox="0 0 200 200" width="150" height="150">
          <defs>
            <path
              id="circle"
              d="M 100, 100 m -50, 0 a 50, 50 0 1, 0 100, 0 a 50, 50 0 1, 0 -100, 0"
            ></path>
          </defs>
          <text
            width="400"
            className="fill-white text-[11px] uppercase tracking-[5px] font-normal"
          >
            <textPath
              alignment-baseline="top"
              xlinkHref="#circle"
              className="text"
            >
              Scroll Down · Scroll Down ·
            </textPath>
          </text>
        </svg>
      </div>
      <ZoomName />
    </div>
  );
};

export default HeroSection;
