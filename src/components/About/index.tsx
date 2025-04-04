import React from "react";
import RevealOnScroll from "../RevealOnScroll/index.tsx";
import FadeInSection from "../FadeInSection/index.tsx";
import Expertise from "../Expertise/index.tsx";
import ThreeDCard from "../ThreeDCard/index.tsx";

const About = () => {
  return (
    <div
      className="p-10 md:pt-[150px] pt-0 pb-[200px] text-[#b3b3b3]"
      id="about"
    >
      <div className="flex flex-col md:flex-row items-start">
        <div className="w-full text-xl md:order-1 order-2">
          <RevealOnScroll>
            I’m a<span className="text-color1 px-1">software engineer</span> who
            builds useful things. I’ve helped startups, agencies, and
            freelancers create apps, connect systems, and solve problems. Every
            day, I write code, fix bugs, and find better ways to work.
            <br />
            <br />I got here from
            <span className="text-color1 px-1">curiosity</span> about how
            websites work—it turned into a career which I genuinely enjoy.
            <br />
            <br />
            When I’m not coding, I check out new tech, work on side projects, or
            contribute to open source.
            <br />
            <br />
            Right now, I’m working with
            <span className="text-color1 px-1">TheCryptoReviewer</span>, a
            startup offering a risk-free crypto simulator.
          </RevealOnScroll>

          <FadeInSection>
            <a className="green-btn light my-10" href="#">
              <span className="text-white leading-none relative z-[5] mr-8 uppercase">
                More About Me
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.66669 11.3334L11.3334 4.66669"
                  stroke="white"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.66669 4.66669H11.3334V11.3334"
                  stroke="white"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </FadeInSection>
        </div>

        <div className="w-full text-center flex justify-center md:order-2 order-1">
          <div className="md:h-[450px] h-[500px]">
            <ThreeDCard
              image={require("../../assets/me2.png")}
              imageClasses="object-contain"
              containerClasses="shadow-none w-full h-full"
            />
          </div>
        </div>

        {/* <div className="w-full"><Expertise /></div> */}
      </div>
    </div>
  );
};

export default About;
