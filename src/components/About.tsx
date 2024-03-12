import React from "react";
import { CardBody, CardContainer, CardItem } from "./aceternity/3d-card.tsx";
import { FaMapMarkedAlt, FaProjectDiagram } from "react-icons/fa";
import { BsFillPersonLinesFill, BsStars } from "react-icons/bs";
import PDF from "../assets/JoharKhanResume.pdf";
import { ServiceCards } from "./aceternity/service-cards.tsx";

const About = () => {
  const projects = [
    {
      title: "Web Design",
      description:
        "I appreciate the simple content structure, clear design patterns, and thoughtful interactions.",
      link: "https://stripe.com",
    },
    {
      title: "Front End Development",
      description:
        "Creating things from scratch and enjoy bringing ideas to life in the browser.",
      link: "https://netflix.com",
    },
    {
      title: "Back End Development",
      description:
        "Fast and scalable backend solutions ranging from apps based on wordpress to big custom solutions.",
      link: "https://google.com",
    },
    {
      title: "Databases",
      description:
        "Can design, develop, implement, test, and maintain databases.",
      link: "https://meta.com",
    },
    {
      title: "2d/3d Game Development",
      description:
        "Created small games that makes no sense but are not boring either!",
      link: "https://amazon.com",
    },
    {
      title: "App Development",
      description:
        "Building Mobile applications that help grow you and your business.",
      link: "https://microsoft.com",
    },
  ];

  return (
    <div className="bg-black h-auto" id="about">
      <div className="w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center py-6 pt-14">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>
        <div className="container mx-auto">
          <div className="relative z-10 text-5xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-500  text-center font-sans font-bold">
            About Me
          </div>

          <div className="relative">
            <CardContainer className="inter-var w-full p-4 pb-0">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-slate-500/[0.1] dark:bg-black dark:border-white/[0.1] border-black/[0.1] h-auto rounded-xl p-6 border w-full">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10">
                  <CardItem translateZ="100">
                    <div className="w-48 h-48">
                      <img
                        src={require("../assets/me.jpg")}
                        alt="Johar Khan"
                        className="rounded-full w-full h-full object-cover group-hover/card:shadow-xl"
                      />
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="text-start w-full">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Johar Khan
                    </h2>
                    <p className="text-sm text-neutral-500 my-2 flex items-center gap-2">
                      <FaMapMarkedAlt />
                      <span>Islamabad, Pakistan</span>
                    </p>
                    <p className="text-sm font-light text-white">
                      I'm a tech enthusiast with over 2 years of experience in
                      web and app development. From Python and Flutter to React
                      and beyond, I navigate the world of coding with ease,
                      ensuring projects come to life smoothly. Managing projects
                      from start to finish is my forte, making sure everything
                      runs on time and within budget.
                      <br />
                      <br /> Outside of coding, you'll find me exploring the
                      latest tech trends, diving into a good book, and enjoying
                      outdoor adventures. I believe in a balanced life, where
                      curiosity extends beyond screens. Let's connect to explore
                      not just coding but the colorful tapestry of life. 🌐🚀
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-10 justify-between items-center mt-10">
                      <CardItem translateZ={20}>
                        <div className="flex items-center gap-2">
                          <div className="text-lg text-white w-10 h-10 border rounded-full text-center p-2.5 group-hover/card:bg-white group-hover/card:text-black transition-colors duration-500">
                            <BsStars />
                          </div>
                          <div className="flex items-start flex-col">
                            <span className="text-sm text-neutral-500 font-semibold">
                              2+ Years Work
                            </span>
                            <span className="text-sm text-neutral-500">
                              Experience
                            </span>
                          </div>
                        </div>
                      </CardItem>

                      <CardItem translateZ={20}>
                        <div className="flex items-center gap-2">
                          <div className="text-lg text-white w-10 h-10 border rounded-full text-center p-2.5 group-hover/card:bg-white group-hover/card:text-black transition-colors duration-500">
                            <FaProjectDiagram />
                          </div>
                          <div className="flex items-start flex-col">
                            <span className="text-sm text-neutral-500 font-semibold">
                              10+ Projects
                            </span>
                            <span className="text-sm text-neutral-500">
                              Completed
                            </span>
                          </div>
                        </div>
                      </CardItem>

                      <CardItem translateZ={20}>
                        <div className="flex items-center gap-2">
                          <div className="text-lg text-white w-10 h-10 border rounded-full text-center p-2.5 group-hover/card:bg-white group-hover/card:text-black transition-colors duration-500">
                            <BsFillPersonLinesFill />
                          </div>
                          <div className="flex items-start flex-col">
                            <span className="text-sm text-neutral-500 font-semibold">
                              Freelance
                            </span>
                            <span className="text-sm text-neutral-500">
                              Available
                            </span>
                          </div>
                        </div>
                      </CardItem>

                      <CardItem translateZ={20}>
                        <a
                          href={PDF}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-3 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                          Download CV
                        </a>
                      </CardItem>
                    </div>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>

          <div className="w-full mx-auto">
            <ServiceCards items={projects} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
