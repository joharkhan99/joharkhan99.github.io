import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.css"; // Import the updated CSS

gsap.registerPlugin(ScrollTrigger);

const Expertise = () => {
  useEffect(() => {
    // Set up GSAP ScrollTrigger animations for each category
    const categories = document.querySelectorAll(".category");
    categories.forEach((category) => {
      const svg = category.querySelector(".line-svg svg");
      const line = svg?.querySelector("line");
      const text = category.querySelector(".skill");
      // Use the line's stroke-dasharray as the exact line length
      const lineLength = Number(line?.getAttribute("stroke-dasharray"));

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: category,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        },
      });

      // Animate the line drawing (strokeDashoffset from full to 0)
      if (line) {
        tl.to(
          line,
          {
            strokeDashoffset: 0,
            ease: "none",
            duration: 1,
          },
          0
        );
      }

      // Animate the text fading in immediately after the line is drawn
      tl.to(
        text,
        {
          opacity: 1,
          y: 0,
          ease: "power1.out",
          duration: 0.5,
        },
        0.5
      );
    });

    // Cleanup function in case component unmounts.
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="services-container">
      <div className="category">
        <div className="line-wrapper h-[100px]">
          <div className="line-svg">
            <svg width="2" height="100">
              <line
                x1="2"
                y1="0"
                x2="2"
                y2="100"
                strokeDasharray="100"
                strokeDashoffset="100"
              />
            </svg>
          </div>
        </div>
        <div className="text-center my-4 skill opacity-0 text-white text-base">
          UI & Design
        </div>
      </div>
      <div className="category">
        <div className="line-wrapper h-[150px]">
          <div className="line-svg">
            <svg width="2" height="150">
              <line
                x1="2"
                y1="0"
                x2="2"
                y2="150"
                strokeDasharray="150"
                strokeDashoffset="150"
              />
            </svg>
          </div>
        </div>
        <div className="text-center my-4 skill opacity-0 text-white text-base">
          Backend Development
        </div>
      </div>
      <div className="category">
        <div className="line-wrapper h-[100px]">
          <div className="line-svg">
            <svg width="2" height="100">
              <line
                x1="2"
                y1="0"
                x2="2"
                y2="100"
                strokeDasharray="100"
                strokeDashoffset="100"
              />
            </svg>
          </div>
        </div>
        <div className="text-center my-4 skill opacity-0 text-white text-base">
          Automation & AI
        </div>
      </div>
      <div className="category">
        <div className="line-wrapper h-[100px]">
          <div className="line-svg">
            <svg width="2" height="100">
              <line
                x1="2"
                y1="0"
                x2="2"
                y2="100"
                strokeDasharray="100"
                strokeDashoffset="100"
              />
            </svg>
          </div>
        </div>
        <div className="text-center my-4 skill opacity-0 text-white text-base">
          Frontend Development
        </div>
      </div>
      <div className="category">
        <div className="line-wrapper h-[100px]">
          <div className="line-svg">
            <svg width="2" height="100">
              <line
                x1="2"
                y1="0"
                x2="2"
                y2="100"
                strokeDasharray="100"
                strokeDashoffset="100"
              />
            </svg>
          </div>
        </div>
        <div className="text-center my-4 skill opacity-0 text-white text-base">
          DevOps & Cloud
        </div>
      </div>
      <div className="category mb-3">
        <div className="line-wrapper h-[200px]">
          <div className="line-svg">
            <svg width="2" height="200">
              <line
                x1="2"
                y1="0"
                x2="2"
                y2="200"
                strokeDasharray="200"
                strokeDashoffset="200"
              />
            </svg>
          </div>
        </div>
        <div className="text-center my-4 skill opacity-0 text-white text-base">
          Mobile Apps
        </div>
      </div>
    </div>
  );
};

export default Expertise;
