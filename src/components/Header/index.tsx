import React, { useState } from "react";
import "./index.css";
import Lenis from "lenis";
import { GoArrowUpRight } from "react-icons/go";

const Header = ({ lenisRef }: { lenisRef: any }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const openMenu = () => {
    document.body.style.overflow = "hidden";
    lenisRef.current?.destroy();
    setIsNavOpen(true);
  };

  const closeMenu = () => {
    document.body.style.overflow = "";
    lenisRef.current = new Lenis({
      duration: 10,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsNavOpen(false);
      setIsAnimatingOut(false);
    }, 1500);
  };

  return (
    <>
      <header className="header absolute top-0 left-0 w-full z-20 p-4 px-10">
        <div className="flex flex-row items-center justify-between">
          <div>
            <a href="#" className="block">
              <div className="text-fill-effect ruwudu-regular text-6xl">ج</div>
            </a>
          </div>

          <div>
            <div className="flex items-center gap-4">
              <button
                onClick={openMenu}
                className="flex flex-col items-end w-8 gap-1.5 group"
              >
                <span className="w-full h-[1px] bg-white block"></span>
                <span className="w-1/3 h-[1px] group-hover:w-full transition-all duration-500 bg-white block"></span>
                <span className="w-2/3 h-[1px] group-hover:w-full transition-all duration-500 bg-white block"></span>
              </button>
            </div>
          </div>
        </div>
      </header>
      {isNavOpen && (
        <nav
          className={`nav-overlay fixed inset-0 z-30 flex flex-col items-center justify-center ${
            isAnimatingOut ? "animate-morphReverse" : "animate-morph"
          }`}
        >
          <div className="flex flex-row items-center justify-between p-4 px-10 w-full">
            <div className="block text-left">
              <div className="text-white ruwudu-regular text-6xl">ج</div>
            </div>

            <button
              onClick={closeMenu}
              className="text-white text-sm uppercase font-normal border-b border-b-white opacity-0 animate-fadeIn"
            >
              close
            </button>
          </div>

          <div className="overflow-auto w-full navbar-content">
            <div className="flex lg:flex-row flex-col items-start justify-between py-10 px-10 gap-10 w-full">
              <div className="lg:gap-0 gap-0 flex flex-col items-start justify-start w-full">
                <div
                  className={`opacity-0 delay-1000 ${
                    isAnimatingOut ? "animate-fadeOut" : "animate-fadeIn"
                  }`}
                >
                  <a href="#" onClick={closeMenu} className="block">
                    <div className="relative text-center w-full flex justify-center items-center flex-col z-50">
                      <div className="lg:text-[8vw] text-[50px] text-white font-bold z-10">
                        <div className="learn-more group !p-0 !rounded-none">
                          <span className="button-text !capitalize transition-all !duration-400 group-hover:opacity-0 group-hover:-translate-y-16 relative tracking-widest">
                            Home
                          </span>
                          <span className="button-text !capitalize transition-all !duration-400 opacity-0 translate-y-16 group-hover:opacity-100 group-hover:translate-y-0 absolute !text-[#154633] tracking-widest">
                            Home
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  className={`opacity-0 delay-1000 ${
                    isAnimatingOut ? "animate-fadeOut" : "animate-fadeIn"
                  }`}
                >
                  <a href="#about" onClick={closeMenu} className="block">
                    <div className="relative text-center w-full flex justify-center items-center flex-col z-50">
                      <div className="lg:text-[8vw] text-[50px] text-white font-bold z-10">
                        <div className="learn-more group !p-0 !rounded-none">
                          <span className="button-text !capitalize transition-all !duration-400 group-hover:opacity-0 group-hover:-translate-y-16 relative tracking-widest">
                            About
                          </span>
                          <span className="button-text !capitalize transition-all !duration-400 opacity-0 translate-y-16 group-hover:opacity-100 group-hover:translate-y-0 absolute !text-[#154633] tracking-widest">
                            About
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div
                  className={`opacity-0 delay-1000 ${
                    isAnimatingOut ? "animate-fadeOut" : "animate-fadeIn"
                  }`}
                >
                  <a href="#projects" onClick={closeMenu} className="block">
                    <div className="relative text-center w-full flex justify-center items-center flex-col z-50">
                      <div className="lg:text-[8vw] text-[50px] text-white font-bold z-10">
                        <div className="learn-more group !p-0 !rounded-none">
                          <span className="button-text !capitalize transition-all !duration-400 group-hover:opacity-0 group-hover:-translate-y-16 relative tracking-widest">
                            Projects
                          </span>
                          <span className="button-text !capitalize transition-all !duration-400 opacity-0 translate-y-16 group-hover:opacity-100 group-hover:translate-y-0 absolute !text-[#154633] tracking-widest">
                            Projects
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div
                className={`text-left lg:p-10 w-full ${
                  isAnimatingOut ? "animate-morphReverse" : "animate-morph"
                }`}
              >
                <p className="capitalize lg:text-3xl text-2xl text-white font-light">
                  Ready for
                  <br />a Quick Response
                </p>

                <div className="lg:my-28 my-14">
                  <a
                    href="mailto:joharkhan1999@gmail.com"
                    className="text-[#154633] font-bold pb-1 border-b-2 border-b-[#154633]"
                  >
                    joharkhan1999@gmail.com
                  </a>
                </div>

                <div className="flex justify-start flex-row lg:gap-10 gap-6 items-center flex-wrap">
                  <a
                    href="https://www.linkedin.com/in/johar-khan"
                    target="_blank"
                    className="text-white flex flex-row gap-0 items-center font-bold hover:underline uppercase"
                  >
                    <span className="text-base font-semibold">Linkedin</span>
                    <GoArrowUpRight size={25} />
                  </a>
                  <a
                    href="https://github.com/joharkhan99"
                    target="_blank"
                    className="text-white flex flex-row gap-0 items-center font-bold hover:underline uppercase"
                  >
                    <span className="text-base font-semibold">Github</span>
                    <GoArrowUpRight size={25} />
                  </a>
                  <a
                    href="https://upwork.com/freelancers/joharkhan3"
                    target="_blank"
                    className="text-white flex flex-row gap-0 items-center font-bold hover:underline uppercase"
                  >
                    <span className="text-base font-semibold">Upwork</span>
                    <GoArrowUpRight size={25} />
                  </a>
                  <a
                    href="https://www.instagram.com/johar_khan99"
                    target="_blank"
                    className="text-white flex flex-row gap-0 items-center font-bold hover:underline uppercase"
                  >
                    <span className="text-base font-semibold">Instagram</span>
                    <GoArrowUpRight size={25} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
