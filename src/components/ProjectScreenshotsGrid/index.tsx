import React from "react";
import { ProjectHighlight } from "../../data";

const ProjectScreenshotsGrid = ({ images }: { images: ProjectHighlight[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 relative">
      {images.map((item: ProjectHighlight, index) => {
        return (
          <div className="shadow-2xl">
            <img
              className="h-auto max-w-full rounded-lg hover:scale-105 transition-transform transform duration-500"
              src={item.original}
              alt="App Highlight"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectScreenshotsGrid;
