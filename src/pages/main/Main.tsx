import React, { useState } from "react";
import About from "../../components/About.tsx";
import Experience from "../../components/Experience.tsx";
import Education from "../../components/Education.tsx";
import Contact from "../../components/Contact.tsx";
import PersonalProjects from "../../components/PersonalProjects.tsx";
import { GoHome } from "react-icons/go";
import { CiLight } from "react-icons/ci";
import { BsMoonStars } from "react-icons/bs";

const Main = () => {
  const [darkMode, setDarkMode] = useState(true);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <main className="dark:bg-[#222] bg-white h-full py-12">
      <div className="max-w-xl mx-auto p-2 relative">
        <About />
        <Experience />
        <Education />
        <PersonalProjects />
        <Contact />

        <div className="fixed bottom-3 left-0 z-10 w-full flex justify-center">
          <div className="mx-auto flex items-center justify-between max-w-max hover:p-2 transition-all duration-300 w-full gap-x-5 rounded-full border border-black/10 backdrop-blur-md py-1 px-1">
            <a
              className="rounded-full p-2 dark:text-color2 text-lightColor2 dark:hover:bg-black/30 hover:bg-black/10 transition-all duration-300"
              href="#"
            >
              <GoHome size={20} />
            </a>
            <button
              className="rounded-full p-2 dark:text-color2 text-lightColor2 dark:hover:bg-black/30 hover:bg-black/10 transition-all duration-300"
              onClick={handleDarkMode}
            >
              {darkMode ? <CiLight size={20} /> : <BsMoonStars size={19} />}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
