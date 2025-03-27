import React, { cloneElement, useEffect, useRef, useState } from "react";

const RevealOnScroll = ({ children, threshold = 0.5 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(textRef.current!);
          }
        });
      },
      { threshold }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [threshold]);

  return (
    <div ref={textRef} style={{ overflow: "hidden", display: "inline-block" }}>
      {children.map((child, index) => {
        if (typeof child === "string") {
          return child.split(/(\s+)/).map((ch, charIndex) => (
            <span
              key={`char-${index}-${charIndex}`}
              style={{
                display: "inline-block",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-100%)",
                transition: `transform 0.5s ease-out ${
                  charIndex * 0.03
                }s, opacity 0.5s ease-out ${charIndex * 0.03}s`,
                whiteSpace: ch === " " ? "pre" : "normal",
              }}
            >
              {ch}
            </span>
          ));
        } else if (child.type === "br") {
          return <br key={`br-${index}`} />;
        } else {
          return cloneElement(child, {
            style: {
              display: "inline-block",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-100%)",
              transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
              ...child.props.style,
            },
          });
        }
      })}
    </div>
  );
};

export default RevealOnScroll;
