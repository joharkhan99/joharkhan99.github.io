import React, { useEffect, useRef, useState } from "react";
import "./index.css";

const ZoomName = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const [overlayOpacity, setOverlayOpacity] = useState(1);

  useEffect(() => {
    // Animation function to be called on each frame
    const animate = (time: number) => {
      requestAnimationFrame(animate);

      // Apply zoom effect and overlay opacity based on scroll position
      if (textRef.current && containerRef.current && spacerRef.current) {
        const zoomDistance = 800; // Distance for the zoom effect
        const holdDistance = 300; // Distance to hold the zoomed view
        const scrollY = window.scrollY;

        if (scrollY <= zoomDistance) {
          // During zoom animation - Netflix style extreme zoom
          const scrollProgress = Math.min(1, scrollY / zoomDistance);

          // Use a much higher scale value to make it zoom beyond the screen
          let scale;
          if (scrollProgress < 0.7) {
            scale = 1 + 10 * scrollProgress; // Initial zoom
          } else {
            // Accelerate dramatically for the last 30% of the animation
            const finalPart = (scrollProgress - 0.7) / 0.3;
            scale = 8 + 42 * finalPart; // Goes up to 50x at the end
          }

          textRef.current.style.transform = `scale(${scale})`;
          textRef.current.style.opacity =
            scrollProgress < 0.9 ? "1" : `${1 - (scrollProgress - 0.9) * 10}`;
          containerRef.current.style.position = "sticky";
          containerRef.current.style.top = "0";

          // Keep overlay fully opaque until zoom is complete
          setOverlayOpacity(1);
        } else if (scrollY <= zoomDistance + holdDistance) {
          // Hold the black screen for a while while fading out the overlay
          textRef.current.style.transform = `scale(50)`;
          textRef.current.style.opacity = "0"; // Text is now invisible
          containerRef.current.style.position = "sticky";
          containerRef.current.style.top = "0";

          // Calculate progress to fade out overlay from 1 to 0
          const progress = (scrollY - zoomDistance) / holdDistance;
          setOverlayOpacity(1 - progress);
        } else {
          // Transition to content - remove sticky positioning and overlay completely
          containerRef.current.style.position = "relative";
          setOverlayOpacity(0);
        }
      }
    };

    // Start the animation loop
    requestAnimationFrame(animate);
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          transition: "background-color 0.3s ease",
          background: "#95C11F",
        }}
        className="relative animate-gradient"
      >
        <div
          className="absolute w-full h-full top-0 left-0 transition-opacity duration-500"
          style={{ backgroundColor: "#222", opacity: overlayOpacity }}
        ></div>

        <div
          ref={textRef}
          className="DeliriumNcv-font animate-gradient transform-gpu transition-transform duration-200 whitespace-nowrap lg:text-[350px] md:text-[200px] text-[150px] font-normal tracking-tight text-center"
          style={{
            color: "#fff",
            // background: "linear-gradient(360deg,#e9fbcf 10%,#1d7d8e 360%)",
            // WebkitBackgroundClip: "text",
            // WebkitTextFillColor: "transparent",
            // transition: "transform 0.1s ease-out, opacity 0.2s ease-out",
            // willChange: "transform, opacity",
            textTransform: "uppercase",
          }}
        >
          JOHAR KHAN
        </div>
      </div>

      <div
        ref={spacerRef}
        style={{
          height: "1500px",
          // background: "linear-gradient(360deg, #01a99c 10%, #0698b1 360%)",
          background: "#95C11F",
        }}
      >
        <div className="flex justify-center items-center w-full h-full">
          <div className="z-50">
            <h1 className="text-lg text-white">Almost there, keep going!</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZoomName;
