import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimatedText = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const textRef1 = useRef<HTMLHeadingElement | null>(null);
  const textRef2 = useRef<HTMLHeadingElement | null>(null);
  const scrollTriggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const text1 = textRef1.current;
    const text2 = textRef2.current;

    if (!section || !text1 || !text2) return;

    scrollTriggersRef.current.forEach((st) => st.kill());
    scrollTriggersRef.current = [];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        // markers: true, // Remove in production
        pin: false,
        invalidateOnRefresh: true,
      },
    });

    if (tl.scrollTrigger) {
      scrollTriggersRef.current.push(tl.scrollTrigger);
    }

    tl.fromTo(
      text1,
      {
        xPercent: 0, // Start at center
      },
      {
        xPercent: 50, // End at right
        ease: "power1.inOut",
      },
      0
    );

    tl.fromTo(
      text2,
      {
        xPercent: 0, // Start at center
      },
      {
        xPercent: -50, // End at left
        ease: "power1.inOut",
      },
      0
    );

    return () => {
      scrollTriggersRef.current.forEach((st) => st.kill());
      scrollTriggersRef.current = [];
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-40 overflow-hidden relative mb-[500px]"
    >
      <div className="container mx-auto flex flex-col gap-8">
        <div className="transform w-[200vw] bg-[#95C11F] py-4 translate-x-[-20%] z-10">
          <h2
            ref={textRef1}
            className="text-3xl md:text-4xl lg:text-5xl text-white font-bold whitespace-nowrap text-center w-full relative left-[40%]"
            style={{
              transform: "translateX(-70%)",
            }}
          >
            DESIGN · BUILD · TEST · SHIP
          </h2>
        </div>

        <div className="transform w-[200vw] bg-[#95C11F] py-4 -translate-x-[4%]">
          <h2
            ref={textRef2}
            className="text-3xl md:text-4xl lg:text-5xl text-white font-bold whitespace-nowrap text-center relative left-[60%]"
            style={{
              transform: "translateX(-60%)",
            }}
          >
            LET'S BUILD TOGETHER
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ScrollAnimatedText;
