import React from "react";
import About from "../../components/About.tsx";
import Experience from "../../components/Experience.tsx";
import Education from "../../components/Education.tsx";

const Main = () => {
  return (
    <main>
      <div className="max-w-lg mx-auto my-12 p-2">
        <About />
        <Experience />
        <Education />
      </div>
    </main>
  );
};

export default Main;
