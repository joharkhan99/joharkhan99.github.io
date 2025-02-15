import React from "react";
import About from "../../components/About.tsx";
import Experience from "../../components/Experience.tsx";
import Education from "../../components/Education.tsx";
import Contact from "../../components/Contact.tsx";
import PersonalProjects from "../../components/PersonalProjects.tsx";

const Main = () => {
  return (
    <main>
      <div className="max-w-xl mx-auto my-12 p-2">
        <About />
        <Experience />
        <Education />
        <PersonalProjects />
        <Contact />
      </div>
    </main>
  );
};

export default Main;
