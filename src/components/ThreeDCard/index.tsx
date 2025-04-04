import React, { useRef, useEffect } from "react";

const ThreeDCard = ({
  image,
  imageClasses = "object-cover",
  containerClasses = "shadow-lg lg:w-[500px] lg:h-[400px] md:w-[400px] md:h-[300px] w-[300px] h-[200px]",
}: {
  image: string;
  containerClasses?: string;
  imageClasses?: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  let bounds: DOMRect | null = null;

  const rotateToMouse = (e: MouseEvent) => {
    if (!bounds || !cardRef.current) return;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

    cardRef.current.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(${center.y / 100}, ${-center.x / 100}, 0, ${
      Math.log(distance + 1) * 2
    }deg)
    `;
  };

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = (e: MouseEvent) => {
      bounds = card.getBoundingClientRect();
      document.addEventListener("mousemove", rotateToMouse);
      rotateToMouse(e);
    };

    const handleMouseLeave = () => {
      document.removeEventListener("mousemove", rotateToMouse);
      card.style.transform = "";
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousemove", rotateToMouse);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative transition-transform duration-300 ease-out overflow-hidden ${containerClasses}`}
      style={{ perspective: "1500px" }}
    >
      <img
        src={image}
        alt="Project 3D Card"
        className={`w-full h-full ${imageClasses}`}
      />
    </div>
  );
};

export default ThreeDCard;
