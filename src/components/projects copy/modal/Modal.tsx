import React, { useEffect, useMemo, useState } from "react";
import "./index.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import TimeLine from "../../TimeLine/index.tsx";
import ProjectScreenshotsCarousel from "../../ProjectScreenshotsCarousel/index.tsx";
import { GoArrowUpRight } from "react-icons/go";
import FadeInSection from "../../FadeInSection/index.tsx";
import { Project, projectsData, ProjectType } from "../../../data/index.ts";
import ProjectScreenshotsGrid from "../../ProjectScreenshotsGrid/index.tsx";

interface ProjectModalProps {
  active: boolean;
  handleCloseProjectModal: () => void;
  handleOpenProjectModal: (project: Project) => void;
  setModalActive: (isActive: boolean) => void;
  selectedProject: Project | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  active,
  handleCloseProjectModal,
  handleOpenProjectModal,
  setModalActive,
  selectedProject,
}) => {
  const [animate, setAnimate] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  const nextProjectData = useMemo(() => {
    if (!selectedProject) return null;

    const currentIndex = projectsData.findIndex(
      (p: Project) => p.id === selectedProject.id
    );
    const nextIndex =
      currentIndex >= projectsData.length - 1 ? 0 : currentIndex + 1;
    return projectsData[nextIndex];
  }, [selectedProject]);

  useEffect(() => {
    if (active) {
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
    setTimeout(() => {
      handleCloseProjectModal();
    }, 2000);
  };

  const nextProject = () => {
    if (!nextProjectData) return;

    setTimeout(() => {
      setContentVisible(false);
    }, 200);
    setTimeout(() => {
      setAnimate(false);
    }, 400);
    setTimeout(() => {
      handleCloseProjectModal();
    }, 1000);
    setTimeout(() => {
      handleOpenProjectModal(nextProjectData);
    }, 1100);
  };

  return (
    <div className={`loader ${animate ? "loader--active" : ""}`}>
      <div
        className={`loader__tile absolute left-0 w-0 h-[20%]`}
        style={{
          backgroundColor: selectedProject?.primaryColor,
        }}
      ></div>
      <div
        className={`loader__tile absolute left-0 w-0 h-[20%]`}
        style={{
          backgroundColor: selectedProject?.primaryColor,
        }}
      ></div>
      <div
        className={`loader__tile absolute left-0 w-0 h-[20%]`}
        style={{
          backgroundColor: selectedProject?.primaryColor,
        }}
      ></div>
      <div
        className={`loader__tile absolute left-0 w-0 h-[20%]`}
        style={{
          backgroundColor: selectedProject?.primaryColor,
        }}
      ></div>
      <div
        className={`loader__tile absolute left-0 w-0 h-[20%]`}
        style={{
          backgroundColor: selectedProject?.primaryColor,
        }}
      ></div>

      <section
        className={`z-[9999] fixed left-0 top-0 w-[100vw] h-[100vh] overflow-y-auto inset-0 bg-[#222] transition-opacity duration-1000 ${
          contentVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          scrollBehavior: "smooth",
        }}
      >
        <div className="flex flex-row items-center justify-start gap-x-2 md:p-20 p-4">
          <button
            type="button"
            onClick={handleClose}
            className="text-white hover:bg-white hover:text-[#222] rounded-full transition-all duration-500"
          >
            <IoIosArrowRoundBack size={30} />
          </button>
          <span className="text-xs font-normal">
            Projects / {selectedProject?.mainTitle}
          </span>
        </div>

        <div className="my-10 md:mt-24 flex md:flex-row flex-col md:gap-36 gap-8 md:p-20 p-4 pt-0">
          <div className="w-full">
            <div className="mb-10">
              <h1 className="text-white md:text-[80px] text-3xl font-bold md:leading-[70px] leading-normal mb-3">
                {selectedProject?.secondaryTitle}
              </h1>
              <span className="text-[#b3b3b3] text-xl">
                {selectedProject?.tagline}
              </span>
            </div>

            <p className="text-base">{selectedProject?.description}</p>
          </div>
          <div className="w-fit">
            <div className="flex flex-col items-start md:gap-12 gap-5">
              <div className="flex flex-col items-start gap-2">
                <div className="text-sm tracking-[8px]">ROLE</div>
                <span className="text-white text-base">
                  {selectedProject?.role}
                </span>
              </div>

              <div className="flex flex-col items-start gap-2">
                <div className="text-sm tracking-[8px]">YEAR</div>
                <span className="text-white text-base">
                  {selectedProject?.year}
                </span>
              </div>

              <div className="flex flex-col items-start gap-2">
                <div className="text-sm tracking-[8px]">SERVICES</div>
                <span className="text-white text-base">
                  {selectedProject?.services}
                </span>
              </div>

              <div className="flex flex-col items-start gap-2">
                <div className="text-sm tracking-[8px]">INDUSTRY</div>
                <span className="text-white text-base">
                  {selectedProject?.industry}
                </span>
              </div>
            </div>
          </div>

          <div className="absolute -left-6 bottom-2 md:flex hidden flex-col items-center text-center gap-8">
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

        <div
          className={`md:my-36 w-full p-5 md:py-16 my-10 py-8`}
          style={{
            backgroundColor: selectedProject?.transparentColor,
          }}
        >
          <img
            src={selectedProject?.featureClean}
            alt=""
            className="mx-auto shadow-2xl"
          />
        </div>

        <div className="md:p-20 p-4 pt-0">
          <div className="flex flex-col items-start md:gap-24 gap-12">
            <div className="flex flex-col items-start gap-2">
              <div className="text-white font-bold md:text-3xl text-xl mb-3">
                The Challenge
              </div>
              <p className="font-normal text-base">
                {selectedProject?.challenge}
              </p>
            </div>

            <div className="flex flex-col items-start gap-2">
              <div className="text-white font-bold md:text-3xl text-xl mb-3">
                My Approach
              </div>
              <p className="font-normal text-base">
                {selectedProject?.approach}
              </p>
            </div>

            <div className="flex flex-col items-start gap-2 w-full">
              <div className="text-white font-bold md:text-3xl text-xl mb-3">
                Development Process
              </div>
              <TimeLine process={selectedProject?.process} />
            </div>

            <div className="w-full mt-5 select-none">
              <div className="text-white font-bold text-3xl mb-9">
                Project Highlights
              </div>
              {selectedProject?.type === ProjectType.WEBSITE && (
                <ProjectScreenshotsCarousel
                  images={selectedProject?.highlights}
                />
              )}
              {selectedProject?.type === ProjectType.MOBILE && (
                <ProjectScreenshotsGrid images={selectedProject.highlights} />
              )}
            </div>

            <FadeInSection>
              <div className="flex flex-col md:flex-row gap-4 !justify-between items-center !w-full my-16">
                {selectedProject?.webLink && (
                  <a
                    href={selectedProject?.webLink}
                    target="_blank"
                    className="learn-more group bg-[#95C11F] !p-10 !py-5"
                  >
                    <span className="button-text transition-all !duration-400 group-hover:opacity-0 group-hover:-translate-y-3 relative !text-[#154633] md:text-2xl text-lg">
                      Visit Website
                    </span>
                    <span className="button-text transition-all !duration-400 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 absolute !text-[#154633] md:text-2xl text-lg">
                      Visit Website
                    </span>

                    <GoArrowUpRight
                      size={40}
                      className="text-[#154633] transition-all duration-700 bg-transparent rounded-full p-1 group-hover:bg-[#154633] group-hover:text-[#95C11F]"
                    />
                  </a>
                )}

                {selectedProject?.github && (
                  <a
                    href={selectedProject?.github}
                    target="_blank"
                    className="learn-more group bg-[#95C11F] !p-10 !py-5"
                  >
                    <span className="button-text transition-all !duration-400 group-hover:opacity-0 group-hover:-translate-y-3 relative !text-[#154633] md:text-2xl text-lg">
                      View on GitHub
                    </span>
                    <span className="button-text transition-all !duration-400 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 absolute !text-[#154633] md:text-2xl text-lg">
                      View on GitHub
                    </span>

                    <GoArrowUpRight
                      size={40}
                      className="text-[#154633] transition-all duration-700 bg-transparent rounded-full p-1 group-hover:bg-[#154633] group-hover:text-[#95C11F]"
                    />
                  </a>
                )}
              </div>
            </FadeInSection>
          </div>
        </div>

        {nextProjectData && (
          <section
            className="py-24 flex justify-center items-center w-full border-t border-t-[#ffffff1a] relative group overflow-hidden next-project"
            onClick={nextProject}
          >
            <div className="absolute w-full h-full top-0 left-0 bg-[#222222] transition-all duration-300 group-hover:-translate-y-full overflow-hidden z-10"></div>

            <div className="flex items-center w-full px-20 flex-col z-20 text-white gap-1">
              <p className="p-5 py-2 rounded-full backdrop-blur-md bg-[rgba(255,255,255,0.1)] text-[#bcbcbc] w-fit text-sm">
                Next Project
              </p>
              <p className="text-white text-[40px] font-bold leading-[70px]">
                {nextProjectData.mainTitle}
              </p>
            </div>
            <div className="bg-[#222222] opacity-60">
              <img
                className="absolute left-0 top-0 w-full h-full object-cover transition-all duration-300 group-hover:transform group-hover:scale-110"
                src={nextProjectData.featureImage}
                alt={nextProjectData.mainTitle}
              />
            </div>
          </section>
        )}
      </section>
    </div>
  );
};

export default ProjectModal;
