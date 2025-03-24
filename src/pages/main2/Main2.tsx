import React, { cloneElement } from "react";
import AnimatedCursor from "react-animated-cursor";
import ZoomName from "./ZoomName.tsx";
import AnimatedGrain from "./AnimatedGrain.tsx";
import RevealText from "./RevealText.tsx";

import { useState, useEffect, useRef } from "react";

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

const FadeInSection = ({ children }) => {
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
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

const Main2 = () => {
  return (
    <main id="main2">
      <div className="bg-black">
        <ZoomName />
      </div>
      {/* <AnimatedGrain /> */}
      {/* <AnimatedCursor
        innerSize={0}
        outerSize={40}
        color="0,0,0"
        outerAlpha={0.2}
        innerScale={0}
        outerScale={40}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
        outerStyle={{
          mixBlendMode: "difference",
          borderWidth: 2,
        }}
      /> */}

      <div style={{ margin: "50px 0" }}>
        <RevealOnScroll>
          I’m a multi-disciplinary art director with a focus on Digital Design,
          Interaction Design, and Photo Editing. I've been delivering creative
          and engaging solutions across brand identity, website, app, and
          digital media for almost 10 years.
          <br />
          <br />
          I’m currently working as a digital designer at Studio MINSK, a
          branding agency with devotion to motion, in <span>Amsterdam</span>.
        </RevealOnScroll>
      </div>

      <FadeInSection>
        <div className="box">
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
            veritatis maxime eius eos amet laboriosam consequuntur asperiores
            ipsa quis, iusto rerum nobis distinctio dicta hic minima expedita.
            Doloremque, nulla molestiae.
          </span>
        </div>
      </FadeInSection>

      <div>
        <a href="#">What up</a>

        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
          voluptas, quam tempora a ullam laudantium ab consequatur nisi corporis
          similique nostrum pariatur sit numquam debitis ut iusto recusandae id
          officiis!
        </h2>
        <a href="#">What up</a>
      </div>
      <RevealText />
    </main>
  );
};

export default Main2;
