import React from "react";
import "./index.css";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { SiUpwork } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="relative mt-96 bg-[#95C11F] py-36 px-10">
      <div className="flex justify-between md:flex-row flex-col gap-10">
        <div className="flex items-start justify-between flex-col gap-6 w-full">
          <h1 className="lg:text-[6vw] text-[60px] text-white font-extrabold leading-[55px] md:leading-[80px]">
            Let's
            <br />
            Connect
          </h1>
          <p className="text-white font-medium text-2xl">
            Have questions about a project?
            <br />
            Send me an email—available 24/7.
          </p>
          <div>
            <a
              href="mailto:joharkhan1999@gmail.com"
              className="text-[#154633] border-b pb-1 border-b-[#154633] text-xl font-medium"
            >
              joharkhan1999@gmail.com
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-12 w-full">
          <div className="flex flex-col items-start gap-2">
            <a href="#" className="block">
              <div className="learn-more group !p-0 !rounded-none text-2xl">
                <span className="button-text !capitalize transition-all !duration-400 group-hover:opacity-0 group-hover:-translate-y-12 relative tracking-normal !font-medium">
                  Home
                </span>
                <span className="button-text !capitalize transition-all !duration-400 opacity-0 translate-y-12 group-hover:opacity-100 group-hover:translate-y-0 absolute !text-[#154633] tracking-normal !font-medium">
                  Home
                </span>
              </div>
            </a>
            <a href="#about" className="block">
              <div className="learn-more group !p-0 !rounded-none text-2xl">
                <span className="button-text !capitalize transition-all !duration-400 group-hover:opacity-0 group-hover:-translate-y-12 relative tracking-normal !font-medium">
                  About
                </span>
                <span className="button-text !capitalize transition-all !duration-400 opacity-0 translate-y-12 group-hover:opacity-100 group-hover:translate-y-0 absolute !text-[#154633] tracking-normal !font-medium">
                  About
                </span>
              </div>
            </a>
            <a href="#projects" className="block">
              <div className="learn-more group !p-0 !rounded-none text-2xl">
                <span className="button-text !capitalize transition-all !duration-400 group-hover:opacity-0 group-hover:-translate-y-12 relative tracking-normal !font-medium">
                  Projects
                </span>
                <span className="button-text !capitalize transition-all !duration-400 opacity-0 translate-y-12 group-hover:opacity-100 group-hover:translate-y-0 absolute !text-[#154633] tracking-normal !font-medium">
                  Projects
                </span>
              </div>
            </a>
          </div>

          <div className="flex flex-row items-start gap-5 w-full text-white">
            <a
              href="https://www.linkedin.com/in/johar-khan"
              target="_blank"
              title="Linkedin"
              className="w-12 h-12 rounded-full flex justify-center items-center border border-white hover:border-[#154633] p-3 transition-all hover:bg-[#154633] duration-300 hover:text-[#fff]"
            >
              <FaLinkedinIn size={30} />
            </a>
            <a
              href="https://github.com/joharkhan99"
              target="_blank"
              title="GitHub"
              className="w-12 h-12 rounded-full flex justify-center items-center border border-white hover:border-[#154633] p-3 transition-all hover:bg-[#154633] duration-300 hover:text-[#fff]"
            >
              <LuGithub size={30} />
            </a>
            <a
              href="https://upwork.com/freelancers/joharkhan3"
              target="_blank"
              title="Upwork"
              className="w-12 h-12 rounded-full flex justify-center items-center border border-white hover:border-[#154633] p-3 transition-all hover:bg-[#154633] duration-300 hover:text-[#fff]"
            >
              <SiUpwork size={30} />
            </a>
            <a
              href="https://www.instagram.com/johar_khan99"
              target="_blank"
              title="Instagram"
              className="w-12 h-12 rounded-full flex justify-center items-center border border-white hover:border-[#154633] p-3 transition-all hover:bg-[#154633] duration-300 hover:text-[#fff]"
            >
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
