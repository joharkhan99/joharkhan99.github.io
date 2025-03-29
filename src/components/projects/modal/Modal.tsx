import React, { useEffect, useState } from "react";
import "./index.css";
import { BsArrowLeft } from "react-icons/bs";
import {
  IoIosArrowRoundBack,
  IoIosArrowRoundUp,
  IoMdArrowUp,
} from "react-icons/io";
import TimeLine from "../../timeline/TimeLine.tsx";
import Carousel from "../../carousel/Carousel.tsx";
import ProjectScreenshotsCarousel from "../../ProjectScreenshotsCarousel/ProjectScreenshotsCarousel.tsx";
import { GoArrowUpRight } from "react-icons/go";
import FadeInSection from "../../fadeInSection/FadeInSection.tsx";
import { FaArrowPointer } from "react-icons/fa6";
// import Lenis from "lenis";

interface ProjectModalProps {
  active: boolean;
  handleCloseProjectModal: () => void;
  handleOpenProjectModal: () => void;
  setModalActive: (isActive: boolean) => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  active,
  handleCloseProjectModal,
  handleOpenProjectModal,
  setModalActive,
}) => {
  const [animate, setAnimate] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    if (active) {
      // Trigger open animation immediately
      const timeout = setTimeout(() => setAnimate(true), 0);
      setTimeout(() => {
        setContentVisible(true);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [active]);

  const handleClose = () => {
    setTimeout(() => {
      setContentVisible(false);
    }, 400);
    setTimeout(() => {
      setAnimate(false);
    }, 600);
    // Wait for the transition to finish before unmounting
    setTimeout(() => {
      handleCloseProjectModal();
    }, 2000); // Matches our updated transition durations
  };

  const nextProject = () => {
    setTimeout(() => {
      setContentVisible(false);
    }, 200);
    setTimeout(() => {
      setAnimate(false);
    }, 400);
    // Wait for the transition to finish before unmounting
    setTimeout(() => {
      handleCloseProjectModal();
    }, 1000); // Matches our updated transition durations
    setTimeout(() => {
      handleOpenProjectModal();
    }, 1100); // Matches our updated transition durations
  };

  return (
    <div className={`loader ${animate ? "loader--active" : ""}`}>
      <div className="loader__tile absolute left-0 w-0 h-[20%] bg-purple-500"></div>
      <div className="loader__tile absolute left-0 w-0 h-[20%] bg-purple-500"></div>
      <div className="loader__tile absolute left-0 w-0 h-[20%] bg-purple-500"></div>
      <div className="loader__tile absolute left-0 w-0 h-[20%] bg-purple-500"></div>
      <div className="loader__tile absolute left-0 w-0 h-[20%] bg-purple-500"></div>

      <section
        className={`z-[9999] absolute left-0 top-0 w-[100vw] h-full overflow-y-auto inset-0 bg-[#222] transition-opacity duration-1000 ${
          contentVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          scrollBehavior: "smooth",
        }}
      >
        <div className="flex flex-row items-center justify-start gap-x-2 p-20">
          <button
            type="button"
            onClick={handleClose}
            className="text-white hover:bg-white hover:text-[#222] rounded-full transition-all duration-500"
          >
            <IoIosArrowRoundBack size={24} />
          </button>
          <span className="text-xs font-normal">Projects / Nfluencer</span>
        </div>

        <div className="my-10 mt-24 flex flex-row gap-36 p-20 pt-0">
          <div className="w-full">
            <div className="mb-10">
              <h1 className="text-white text-[80px] font-bold leading-[70px]">
                Nfluencer Web Platform
              </h1>
              <span className="text-[#b3b3b3] text-xl">
                Exchange services for NFTs and cash
              </span>
            </div>

            <p className="text-base">
              NFLUENCER is a web-based marketplace where users can create, buy,
              sell, and exchange NFTs for services or cash. The platform makes
              it simple for influencers, freelancers, and other creative
              professionals to offer gigs and manage orders. It features an NFT
              marketplace integrated with smart contracts on the Ethereum
              network, ensuring secure and transparent transactions. Users can
              easily list their services, connect with buyers, and even exchange
              NFTs as rewards. The system also includes order management and a
              payment system that brings everything together on one convenient
              website.
            </p>
          </div>
          <div className="w-fit">
            <div className="flex flex-col items-start gap-12">
              <div className="flex flex-col items-start gap-2">
                <div className="text-sm tracking-[8px]">ROLE</div>
                <span className="text-white text-base">
                  Full Stack Developer
                </span>
              </div>

              <div className="flex flex-col items-start gap-2">
                <div className="text-sm tracking-[8px]">YEAR</div>
                <span className="text-white text-base">2023</span>
              </div>

              <div className="flex flex-col items-start gap-2">
                <div className="text-sm tracking-[8px]">SERVICES</div>
                <span className="text-white text-base">
                  UI Design, Frontend & Backend Development, Server & Database
                  Management
                </span>
              </div>

              <div className="flex flex-col items-start gap-2">
                <div className="text-sm tracking-[8px]">INDUSTRY</div>
                <span className="text-white text-base">
                  NFTs, Gig Economy, Blockchain
                </span>
              </div>
            </div>
          </div>

          <div className="absolute -left-6 bottom-2 flex flex-col items-center text-center gap-8">
            <span className="uppercase text-[#b3b3b3] font-normal tracking-[0.1em] text-[10px] transform rotate-90 whitespace-nowrap">
              Scroll down
            </span>
            <div className="flex flex-col items-center text-center gap-0.5">
              <div className="w-[1px] h-[60px] bg-[#b3b3b3] animate-elasticus"></div>
              <span className="relative z-10">
                <span className="absolute -ml-[0.236rem] bottom-[2px] w-[7px] h-[7px] border-t border-r border-[#b3b3b3] rotate-[135deg]"></span>
              </span>
            </div>
          </div>
        </div>

        <div className="my-36 bg-[rgb(224,203,253)] w-full p-5 py-16">
          <img
            src={require("../../../assets/portfolio/nfluencermockclean.png")}
            alt=""
            className="mx-auto shadow-2xl"
          />
        </div>

        <div className="p-20 pt-0">
          <div className="flex flex-col items-start gap-24">
            <div className="flex flex-col items-start gap-2">
              <div className="text-white font-bold text-3xl mb-3">
                The Challenge
              </div>
              <p className="font-normal text-base">
                I was asked to build a digital platform that lets creators,
                freelancers, and artists make money by offering services and
                selling NFTs. The idea was to mix traditional gig services with
                a cool NFT twist. The platform needed to let users create
                service packages, handle payments securely, and offer a smooth,
                easy-to-use experience for both sellers and buyers.
              </p>
            </div>

            <div className="flex flex-col items-start gap-2">
              <div className="text-white font-bold text-3xl mb-3">
                My Approach
              </div>
              <p className="font-normal text-base">
                I decided to build the platform as a full-stack MERN application
                with some blockchain features mixed in. My goal was to combine
                familiar e-commerce ideas with the emerging NFT space so that
                even people who aren’t used to blockchain could join in easily.
                I split the system into two parts: one for regular service
                transactions and one for NFT-based offerings.
              </p>
            </div>

            <div className="flex flex-col items-start gap-2 w-full select-none">
              <div className="text-white font-bold text-3xl mb-3">
                Development Process
              </div>
              <TimeLine />
            </div>

            {/* <Carousel /> */}
            <div className=" mt-5">
              <div className="text-white font-bold text-3xl mb-9">
                Project Highlights
              </div>
              <ProjectScreenshotsCarousel />
            </div>

            <FadeInSection>
              <div className="flex flex-col md:flex-row gap-4 !justify-between items-center !w-full my-16">
                {/* Flip Card for the "Visit Website" link */}
                <button className="learn-more group bg-[#95C11F] !p-10 !py-5">
                  <span className="button-text transition-all !duration-400 group-hover:opacity-0 group-hover:-translate-y-3 relative !text-[#154633] !text-2xl">
                    Visit Website
                  </span>
                  <span className="button-text transition-all !duration-400 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 absolute !text-[#154633] !text-2xl">
                    Visit Website
                  </span>

                  <GoArrowUpRight
                    size={40}
                    className="text-[#154633] transition-all duration-700 bg-transparent rounded-full p-1 group-hover:bg-[#154633] group-hover:text-[#95C11F]"
                  />
                </button>

                <button className="learn-more group bg-[#95C11F] !p-10 !py-5">
                  <span className="button-text transition-all !duration-400 group-hover:opacity-0 group-hover:-translate-y-3 relative !text-[#154633] !text-2xl">
                    View on GitHub
                  </span>
                  <span className="button-text transition-all !duration-400 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 absolute !text-[#154633] !text-2xl">
                    View on GitHub
                  </span>

                  <GoArrowUpRight
                    size={40}
                    className="text-[#154633] transition-all duration-700 bg-transparent rounded-full p-1 group-hover:bg-[#154633] group-hover:text-[#95C11F]"
                  />
                </button>
              </div>
            </FadeInSection>
          </div>
        </div>

        <section
          className="py-24 flex justify-center items-center w-full border-t border-t-[#ffffff1a] relative group overflow-hidden"
          onClick={nextProject}
        >
          <div className="absolute w-full h-full top-0 left-0 bg-[#222222] transition-all duration-300 group-hover:-translate-y-full overflow-hidden z-10"></div>

          <div className="flex items-center w-full px-20 flex-col z-20 text-white gap-1">
            <p className="p-5 py-2 rounded-full backdrop-blur-md bg-[rgba(255,255,255,0.1)] text-[#bcbcbc] w-fit text-sm">
              Next Project
            </p>
            <p className="text-white text-[40px] font-bold leading-[70px]">
              MovieLand
            </p>
          </div>
          <div className="bg-[#222222] opacity-50">
            <img
              className="absolute left-0 top-0 w-full h-full object-cover transition-all duration-300 group-hover:transform group-hover:scale-110"
              src={require("../../../assets/portfolio/nfluencermock.png")}
              alt="ABN AMRO World Tennis Tournament 2020 main visual"
            />
          </div>
        </section>
      </section>
    </div>
  );
};

export default ProjectModal;
