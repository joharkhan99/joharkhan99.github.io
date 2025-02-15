import React from "react";
import About from "../../components/About.tsx";
import Experience from "../../components/Experience.tsx";
import Education from "../../components/Education.tsx";
import Contact from "../../components/Contact.tsx";

const Main = () => {
  return (
    <main>
      <div className="max-w-lg mx-auto my-12 p-2">
        <About />
        <Experience />
        <Education />
        <Contact />
      </div>
    </main>
  );
};

export default Main;
