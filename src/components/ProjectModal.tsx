import React from "react";

const ProjectModal = ({ toggleModal, project }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-2">
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={toggleModal}
      ></div>

      <div className="relative z-50 bg-[#3f3f3f] rounded-lg shadow-xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-4 pt-2">
        <button
          onClick={toggleModal}
          className="text-color1 bg-black bg-opacity-30 hover:bg-opacity-50 p-2 py-1 rounded-md text-right ml-auto block text-xs"
        >
          Close
        </button>

        <div className="mt-2">
          <img
            src={project.image}
            alt={project.name}
            title={project.name}
            className="w-full h-[300px] object-contain rounded-sm"
          />
        </div>

        <div className="my-4 text-sm">
          <p className="text-color1 font-bold">{project.name}</p>
          <p className="text-color2">{project.tagline}</p>
          <p className="mt-3 text-color1">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
