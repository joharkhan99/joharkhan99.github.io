import React, { useEffect, useState } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

const BackToTop = ({ backToTopClick }: { backToTopClick: () => void }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const dashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="fixed bottom-7 right-4 z-10" id="backToTopButton">
      <button
        onClick={() => backToTopClick()}
        className="relative w-16 h-16 rounded-full flex items-center justify-center focus:outline-none transition-transform transform active:scale-90 duration-300"
      >
        <svg
          className="absolute top-0 left-0 w-full h-full transform -rotate-90 text-white"
          viewBox="0 0 80 80"
        >
          <circle
            className="text-gray-300 fill-[#ffffff1c]"
            strokeWidth="1"
            stroke="currentColor"
            r={radius}
            cx="40"
            cy="40"
          />
          <circle
            className="text-white"
            strokeWidth="3"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="40"
            cy="40"
            strokeDasharray={circumference}
            strokeDashoffset={dashoffset}
          />
        </svg>
        <IoIosArrowRoundUp size={25} color="#fff" />
      </button>
    </div>
  );
};

export default BackToTop;
