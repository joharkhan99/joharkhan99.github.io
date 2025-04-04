import React, { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import "./index.css";
import SingleProject from "./SingleProject/index.tsx";
import ProjectModal from "./Modal/index.tsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Project, projectsData } from "../../data/index.ts";

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ lenisRef }: { lenisRef: any }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalActive, setModalActive] = useState(false);

  const handleOpenProjectModal = (project: Project) => {
    setSelectedProject(project);

    document.body.style.overflow = "hidden";
    const backToTopButton = document.getElementById("backToTopButton");
    if (backToTopButton) {
      backToTopButton.style.display = "none";
    }

    lenisRef.current?.destroy();
    setModalActive(true);
  };

  const handleCloseProjectModal = () => {
    setSelectedProject(null);
    const backToTopButton = document.getElementById("backToTopButton");
    if (backToTopButton) {
      backToTopButton.style.display = "block";
    }
    document.body.style.overflow = "";
    lenisRef.current = new Lenis({
      duration: 10,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });
    setModalActive(false);
  };

  useEffect(() => {
    const container = containerRef.current;
    const scrollContent = scrollContentRef.current;

    if (!container || !scrollContent) return;

    const scrollWidth = scrollContent.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = scrollWidth - viewportWidth;

    // Pin the section and trigger horizontal scroll
    gsap.to(scrollContent, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: `+=${scrollDistance}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
      id="projects"
    >
      <div ref={scrollContentRef} className="flex w-max h-full">
        <div className="w-screen h-full flex justify-center items-center relative">
          <div className="flex flex-row absolute left-0 top-0 w-full h-full justify-between">
            <div
              className="w-[1px] h-full -z-10"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.07) 100%)",
              }}
            ></div>
            <div
              className="w-[1px] h-full -z-10"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.07) 100%)",
              }}
            ></div>
            <div
              className="w-[1px] h-full -z-10"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.07) 100%)",
              }}
            ></div>
            <div
              className="w-[1px] h-full -z-10"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.07) 100%)",
              }}
            ></div>
            <div
              className="w-[1px] h-full -z-10"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.07) 100%)",
              }}
            ></div>
            <div
              className="w-[1px] h-full -z-10"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.07) 100%)",
              }}
            ></div>
            <div
              className="w-[1px] h-full -z-10"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.07) 100%)",
              }}
            ></div>
          </div>
          {/* lines */}

          <div className="relative text-center w-full flex justify-center items-center z-50">
            <div
              className="lg:text-[10vw] text-[70px] font-bold text-transparent whitespace-nowrap opacity-10 absolute"
              style={{
                WebkitTextStroke: "3px #fff",
              }}
            >
              Projects
            </div>

            <h1 className="lg:text-[3.4vw] text-[40px] text-white font-bold pt-2">
              Projects
            </h1>
          </div>
        </div>

        {projectsData.map((p: Project, index) => {
          const projectIndex = index + 1 < 10 ? `0${index + 1}` : index + 1;
          return (
            <SingleProject
              handleOpenProjectModal={handleOpenProjectModal}
              key={`proj-${index}`}
              projectIndex={projectIndex.toString()}
              project={p}
            />
          );
        })}

        <div className="w-screen h-full"></div>
      </div>

      {modalActive && (
        <ProjectModal
          active={modalActive}
          setModalActive={setModalActive}
          handleOpenProjectModal={handleOpenProjectModal}
          handleCloseProjectModal={handleCloseProjectModal}
          selectedProject={selectedProject}
        />
      )}
    </section>
  );
};

export default Projects;
