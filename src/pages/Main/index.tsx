import React, { useEffect, useRef } from "react";
import AnimatedGrain from "../../components/AnimatedGrain/index.tsx";
import Projects from "../../components/projects/index.tsx";
import AnimatedCursor from "react-animated-cursor";
import Lenis from "lenis";
import OtherProjects from "../../components/OtherProjects/index.tsx";
import Header from "../../components/Header/index.tsx";
import BackToTop from "../../components/BackToTop/index.tsx";
import HeroSection from "../../components/HeroSection/index.tsx";
import About from "../../components/About/index.tsx";

const Main = () => {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 10,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });
    const raf = (time) => {
      if (lenisRef.current) {
        lenisRef.current.raf(time);
      }
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  const backToTopClick = () => {
    lenisRef.current.scrollTo(0, {});
  };

  return (
    <main id="main2">
      <BackToTop backToTopClick={backToTopClick} />
      <Header lenisRef={lenisRef} />
      <HeroSection />
      <AnimatedGrain />
      <AnimatedCursor
        innerSize={0}
        outerSize={30}
        color="255,255,255"
        outerAlpha={0}
        innerScale={0}
        trailingSpeed={1}
        outerScale={3} // radius when on focus
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
          ".next-project",
        ]}
        outerStyle={{
          // mixBlendMode: "difference",
          borderWidth: 1,
          borderColor: "#fff",
        }}
      />
      <About />
      <Projects lenisRef={lenisRef} />
      <OtherProjects />
    </main>
  );
};

export default Main;
