import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { PiGithubLogoLight } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";
import { TbBrandFiverr } from "react-icons/tb";
import { PiGooglePlayLogoLight } from "react-icons/pi";
import { IoCheckmark } from "react-icons/io5";

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);
  const copy = () => {
    const email = "joharkhan1999@gmail.com";
    if (navigator.clipboard) {
      setIsCopied(true);
      navigator.clipboard.writeText(email);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  };
  return (
    <section id="education" className="my-12">
      <div className="text-sm">
        <p className="mb-5 dark:text-color1 text-lightColor1">Get in touch</p>

        <div
          className="flex flex-row justify-between items-center w-full rounded-md p-3 cursor-pointer dark:bg-[#2b2b2b] dark:hover:bg-[#313131] bg-[#f3f4f6] hover:bg-[#e5e7eb] shadow-sm"
          onClick={copy}
        >
          <span className="dark:text-color1 text-lightColor1">
            joharkhan1999@gmail.com
          </span>
          <div
            className={`flex flex-row items-center gap-x-2 ${
              isCopied ? "text-teal-600" : "dark:text-color2 text-lightColor2"
            }`}
          >
            <span>{isCopied ? "Copied!" : "Copy"}</span>
            <span>
              {isCopied ? <IoCheckmark size={16} /> : <FaRegCopy size={16} />}
            </span>
          </div>
        </div>

        <div className="flex flex-row items-center gap-4 justify-between flex-wrap my-4">
          <a
            href="https://github.com/joharkhan99"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row items-center gap-0 dark:text-color2 text-lightColor2 dark:hover:text-color1 hover:text-lightColor1 dark:hover:bg-[#2b2b2b] hover:bg-[#f3f4f6] rounded-md p-2 gap-x-2 transition-colors duration-200"
          >
            <div className="rounded-md shadow-sm">
              <PiGithubLogoLight size={20} />
            </div>
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/johar-khan"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row items-center gap-0 dark:text-color2 text-lightColor2 dark:hover:text-color1 hover:text-lightColor1 dark:hover:bg-[#2b2b2b] hover:bg-[#f3f4f6] rounded-md p-2 gap-x-2 transition-colors duration-200"
          >
            <div className="rounded-md shadow-sm">
              <CiLinkedin size={20} />
            </div>
            <span>Linkedin</span>
          </a>

          <a
            href="https://www.fiverr.com/joharkhan"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row items-center gap-0 dark:text-color2 text-lightColor2 dark:hover:text-color1 hover:text-lightColor1 dark:hover:bg-[#2b2b2b] hover:bg-[#f3f4f6] rounded-md p-2 gap-x-2 transition-colors duration-200"
          >
            <div className="rounded-md shadow-sm">
              <TbBrandFiverr size={20} />
            </div>
            <span>Fiverr</span>
          </a>

          <a
            href="https://play.google.com/store/apps/dev?id=7516290902608936170"
            target="_blank"
            rel="noreferrer"
            className="flex flex-row items-center gap-0 dark:text-color2 text-lightColor2 dark:hover:text-color1 hover:text-lightColor1 dark:hover:bg-[#2b2b2b] hover:bg-[#f3f4f6] rounded-md p-2 gap-x-2 transition-colors duration-200"
          >
            <div className="rounded-md shadow-sm">
              <PiGooglePlayLogoLight size={20} />
            </div>
            <span>Play Store</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
