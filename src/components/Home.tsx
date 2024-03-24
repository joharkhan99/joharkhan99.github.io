import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";
import { cn } from "../utils/cn.ts";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { GoChevronRight } from "react-icons/go";
import { SpotLight } from "./aceternity/spotlight.tsx";

const Home = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  return (
    <div className="relative" id="home">
      <div
        className={cn(
          "h-screen flex flex-col items-center justify-center",
          containerClassName
        )}
      >
        <SpotLight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className={cn("z-10", className)} {...props}>
          <div className="absolute sm:top-5 top-5 right-5 hidden sm:block">
            <div className="flex flex-col gap-5">
              <a
                href="https://www.linkedin.com/in/johar-khan"
                className="hover:text-white text-[#ccc] transition-colors duration-200"
              >
                <FaLinkedin color="inherit" size={18} />
              </a>
              <a
                href="https://github.com/joharkhan99"
                className="hover:text-white text-[#ccc] transition-colors duration-200"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="mailto:joharkhan1999@gmail.com"
                className="hover:text-white text-[#ccc] transition-colors duration-200"
              >
                <MdAlternateEmail size={18} />
              </a>
            </div>
          </div>

          <div className="flex items-center flex-col gap-1">
            <p className="text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 inter-var text-center">
              Hi, I'm Johar Khan
            </p>
            <p className="sm:text-lg text-base mt-4 text-white font-normal inter-var text-center">
              I'm a Software Developer on a journey to turn ideas into reality.
            </p>
            <button
              className="backdrop-blur-lg mt-5 p-3 px-5 bg-white bg-opacity-10 rounded-full hover:bg-white hover:text-black text-white font-semibold text-sm transition-all duration-500 flex items-center gap-2 active:scale-90"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Get in Touch</span>
              <GoChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
