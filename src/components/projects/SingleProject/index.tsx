import React, { useState } from "react";
import ThreeDCard from "../../ThreeDCard/index.tsx";
import { Project } from "../../../data/index.ts";

interface SingleProjectProps {
  handleOpenProjectModal: (project: Project) => void;
  projectIndex: string;
  project: Project;
}

const SingleProject: React.FC<SingleProjectProps> = ({
  handleOpenProjectModal,
  projectIndex,
  project,
}) => {
  return (
    <div className="w-screen h-full flex justify-center items-center">
      <div className="flex justify-center items-center h-full w-full">
        <div className="flex lg:flex-row flex-col justify-center items-center h-full w-full gap-10 lg:p-10 p-3">
          <div className="relative lg:w-auto w-full lg:h-full flex flex-col items-start justify-center gap-3">
            <div
              className="lg:text-[110px] text-[70px] font-bold text-transparent whitespace-nowrap opacity-30 -z-10 lg:-mb-[70px] -mb-[50px]"
              style={{
                WebkitTextStroke: "3px #fff",
              }}
            >
              {projectIndex}
            </div>

            <ThreeDCard image={project.featureImage} />

            <div className="flex flex-row items-center justify-start gap-x-3 group">
              <span className="h-[1px] w-16 bg-white opacity-30 group-hover:w-20 transition-all duration-700 group-hover:opacity-70"></span>
              <span className="text-xs text-[#b3b3b3]">{project.industry}</span>
            </div>
          </div>
          <div className="lg:w-auto w-full">
            <h1 className="text-white lg:text-[80px] md:text-3xl text-2xl font-bold lg:leading-[100px] leading-normal text-start">
              {project.mainTitle}
            </h1>
            <button
              className="learn-more group !pl-0 lg:p-[15px] p-2"
              onClick={() => handleOpenProjectModal(project)}
            >
              <span className="button-text lg:text-[20px] text-base transition-all !duration-400 group-hover:opacity-0 group-hover:-translate-y-3 relative">
                Case Study
              </span>
              <span className="button-text lg:text-[20px] text-base transition-all !duration-400 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 absolute">
                Case Study
              </span>

              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
