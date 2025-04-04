import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { ProjectHighlight } from "../../data";

interface Props {
  images?: ProjectHighlight[];
}

const ProjectScreenshotsCarousel = ({ images }: Props) => {
  return (
    <div
      className="md:px-2 w-full min-h-[300px] max-h-[600px] h-full overflow-hidden mx-auto my-auto relative"
      draggable={false}
    >
      <ImageGallery
        items={images || []}
        showThumbnails={false}
        slideInterval={3000}
        slideDuration={2000}
      />
    </div>
  );
};

export default ProjectScreenshotsCarousel;
