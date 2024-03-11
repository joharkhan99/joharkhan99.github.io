import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../utils/cn.ts";
import { AiFillHome } from "react-icons/ai";
import { FaUserNinja } from "react-icons/fa6";
import { IoNewspaper } from "react-icons/io5";
import { FaProjectDiagram } from "react-icons/fa";
import { IoChatbubble } from "react-icons/io5";

const Navbar = () => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const navItems = [
    { name: "Home", link: "#home", icon: <AiFillHome /> },
    { name: "About", link: "#about", icon: <FaUserNinja /> },
    { name: "Resume", link: "#resume", icon: <IoNewspaper /> },
    { name: "Portfolio", link: "#portfolio", icon: <FaProjectDiagram /> },
    { name: "Contact", link: "#contact", icon: <IoChatbubble /> },
  ];

  return (
    <>
      <div>
        <div
          className={cn(
            "flex max-w-fit fixed top-5 inset-x-0 mx-auto border border-transparent  rounded-full bg-white z-[5000] p-3 py-2  items-center justify-center space-x-4 backdrop-blur-lg bg-opacity-10"
          )}
        >
          {navItems.map((navItem: any, idx: number) => (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 px-2 py-1"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
