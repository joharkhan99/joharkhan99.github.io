import React, { useEffect, useRef, useState } from "react";
import "./index.css";

const FadeInSection = ({ children, classNames = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observerInstance.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      { threshold: 0.5 }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`fade-in-section ${
        isVisible ? "is-visible" : ""
      } w-full ${classNames}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
