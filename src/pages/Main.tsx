import React from "react";
// import Preloader from "../components/Preloader";
import Navbar from "../components/Navbar.tsx";
import Home from "../components/Home.tsx";
import About from "../components/About";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact.tsx";
import { FaRegCopy } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { FaGooglePlay } from "react-icons/fa";

const Main = () => {
  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];

  const contactLinks = [
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/johar-khan",
      icon: <FaLinkedin />,
    },
    {
      title: "GitHub",
      href: "https://github.com/joharkhan99",
      icon: <FaGithub />,
    },
    {
      title: "Fiverr",
      href: "https://www.fiverr.com/joharkhan",
      icon: <SiFiverr />,
    },
    {
      title: "Play Store",
      href: "https://play.google.com/store/apps/developer?id=Johar+Khan",
      icon: <FaGooglePlay />,
    },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="w-full h-auto relative overflow-hidden bg-black">
      <div className="relative w-full">
        <Navbar />
        <Home />
      </div>

      <div className="relative w-full" id="contact">
        <div className="sm:h-screen h-auto w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased sm:pt-0 p-10">
          <div className="mx-auto p-4 sm:pb-4 pb-24 w-full">
            <h1 className="relative z-10 text-5xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-500  text-center font-sans font-bold">
              Contact Me
            </h1>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
              Please feel free to reach out to me for any queries or just to say
              hi!
            </p>

            <div className="flex flex-col justify-center items-center gap-3 mt-5 w-full">
              <div className="bg-white backdrop-blur-lg bg-opacity-10 p-3 px-5 rounded-lg flex justify-between items-center text-white gap-5 z-10">
                <span className="text-sm">joharkhan1999@gmail.com</span>
                <button
                  title="Copy Email"
                  className="cursor-pointer active:scale-75 transform transition-all duration-500"
                  onClick={() => copyToClipboard("joharkhan1999@gmail.com")}
                >
                  <FaRegCopy size={20} />
                </button>
              </div>

              <div className="grid sm:grid-cols-4 xs:grid-cols-2 grid-cols-1 items-center justify-center gap-4 w-auto place-content-center place-items-center place-self-center min-w-fit">
                {contactLinks.map((link, idx) => (
                  <div
                    key={idx}
                    className="flex flex-row items-center justify-center w-full"
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-white backdrop-blur-lg bg-opacity-10 p-3 px-5 rounded-lg flex justify-between items-center text-white gap-5 z-10 hover:bg-white hover:text-black transition-all duration-500 ease-in-out text-sm w-full"
                      title={link.title}
                    >
                      <span className="text-lg block">{link.icon}</span>
                      <span className="block">{link.title}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="absolute sm:bottom-10 bottom-5 text-xs text-neutral-500 z-10">
            Made with <span className="animate-pulse">❤️</span> by Johar Khan
            using{" "}
            <a
              href="https://ui.aceternity.com/"
              className="text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              aceternity.ui
            </a>
          </p>

          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Main;
