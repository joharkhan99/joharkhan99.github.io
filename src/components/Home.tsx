import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";
import { cn } from "../utils/cn.ts";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { GoChevronRight } from "react-icons/go";

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
  const noise = createNoise3D();
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    ctx: any,
    canvas: any;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const init = () => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;
    window.onresize = function () {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };
    render();
  };

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];
  const drawWave = (n: number) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        var y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId: number;
  const render = () => {
    ctx.fillStyle = backgroundFill || "black";
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    init();
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    // I'm sorry but i have got to support it on safari.
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div className="relative">
      <div
        className={cn(
          "h-screen flex flex-col items-center justify-center",
          containerClassName
        )}
      >
        <canvas
          className="absolute inset-0 z-0"
          ref={canvasRef}
          id="canvas"
          style={{
            ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
          }}
        ></canvas>
        <div className={cn("z-10", className)} {...props}>
          <div className="absolute sm:top-5 top-5 right-5 hidden sm:block">
            <div className="flex flex-col gap-5">
              <a
                href=""
                className="hover:text-white text-[#ccc] transition-colors duration-200"
              >
                <FaLinkedin color="inherit" size={18} />
              </a>
              <a
                href=""
                className="hover:text-white text-[#ccc] transition-colors duration-200"
              >
                <FaGithub size={18} />
              </a>
              <a
                href=""
                className="hover:text-white text-[#ccc] transition-colors duration-200"
              >
                <MdAlternateEmail size={18} />
              </a>
            </div>
          </div>

          <div className="flex items-center flex-col gap-1">
            <p className="text-5xl lg:text-7xl text-white font-bold inter-var text-center">
              Hi, I'm Johar Khan
            </p>
            <p className="sm:text-xl text-base mt-4 text-white font-normal inter-var text-center">
              I'm a Software Developer on a journey to turn ideas into reality.
            </p>

            {/* 
            on click go to the contact section
            */}
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
