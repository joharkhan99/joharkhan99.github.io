import React from "react";
import { CardBody, CardContainer, CardItem } from "./aceternity/3d-card.tsx";
import { FaMapMarkedAlt, FaProjectDiagram } from "react-icons/fa";
import { BsFillPersonLinesFill, BsStars } from "react-icons/bs";
import PDF from "../assets/JoharKhanResume.pdf";

const About = () => {
  return (
    <div className="bg-black h-auto" id="about">
      <div className="container mx-auto">
        {/* <LampContainer>
        <div className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
          About Me
        </div>
      </LampContainer> */}

        {/* <div className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"> */}
        <div className="relative z-10 text-5xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-500  text-center font-sans font-bold">
          About Me
        </div>

        <div className="relative">
          <CardContainer className="inter-var w-full p-4">
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
                    I'm a tech enthusiast with over 2 years of experience in web
                    and app development. From Python and Flutter to React and
                    beyond, I navigate the world of coding with ease, ensuring
                    projects come to life smoothly. Managing projects from start
                    to finish is my forte, making sure everything runs on time
                    and within budget.
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
      </div>
    </div>

    // <div class="page pt-about" data-simplebar>
    //   <section class="container">
    //     <div class="header-page mt-70 mob-mt">
    //       <h2>About Me</h2>
    //       <span></span>
    //     </div>

    //     <div class="row mt-100">
    //       <div class="col-lg-12 col-sm-12">
    //         <div class="info box-1">
    //           <div class="row">
    //             <div class="col-lg-3 col-sm-4">
    //               <div class="photo">
    //                 <img alt="" src={require("../assets/me2.jpg")} />
    //               </div>
    //             </div>
    //             <div class="col-lg-9 col-sm-8">
    //               <h4>Johar Khan</h4>
    //               <div class="loc">
    //                 <i class="fas fa-map-marked-alt"></i> Islamabad, Pakistan
    //               </div>
    //               <p>
    //                 I'm a tech enthusiast with over 2 years of experience in web
    //                 and app development. From Python and Flutter to React and
    //                 beyond, I navigate the world of coding with ease, ensuring
    //                 projects come to life smoothly. Managing projects from start
    //                 to finish is my forte, making sure everything runs on time
    //                 and within budget.
    //               </p>
    //               <p>
    //                 Outside of coding, you'll find me exploring the latest tech
    //                 trends, diving into a good book, and enjoying outdoor
    //                 adventures. I believe in a balanced life, where curiosity
    //                 extends beyond screens. Let's connect to explore not just
    //                 coding but the colorful tapestry of life. 🌐🚀
    //               </p>
    //             </div>

    //             <div class="col-lg-3 col-sm-4">
    //               <div class="info-icon">
    //                 <i class="fas fa-award"></i>
    //                 <div class="desc-icon">
    //                   <h6>2+ Years Work</h6>
    //                   <p>Experience</p>
    //                 </div>
    //               </div>
    //             </div>

    //             <div class="col-lg-3 col-sm-4">
    //               <div class="info-icon">
    //                 <i class="fas fa-certificate"></i>
    //                 <div class="desc-icon">
    //                   <h6>10+ Projects</h6>
    //                   <p>Completed</p>
    //                 </div>
    //               </div>
    //             </div>

    //             <div class="col-lg-3 col-sm-4">
    //               <div class="info-icon">
    //                 <i class="fas fa-user-astronaut"></i>
    //                 <div class="desc-icon">
    //                   <h6>Freelance</h6>
    //                   <p>Available</p>
    //                 </div>
    //               </div>
    //             </div>
    //             <div class="col-lg-3 col-sm-12 pt-50">
    //               <a
    //                 href={PDF}
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //                 class="btn-st"
    //               >
    //                 Download CV
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div class="row mt-100">
    //       <div class="col-md-12">
    //         <div class="header-box mb-50">
    //           <h3>Services</h3>
    //         </div>
    //       </div>

    //       <div class="col-lg-6 col-sm-6">
    //         <div class="service box-1 mb-40">
    //           <i class="fas fa-desktop"></i>
    //           <h4>Web Design</h4>
    //           <p>
    //             I appreciate the simple content structure, clear design
    //             patterns, and thoughtful interactions.
    //           </p>
    //         </div>
    //       </div>

    //       <div class="col-lg-6 col-sm-6">
    //         <div class="service box-2 mb-40">
    //           <i class="fas fa-laptop-code"></i>
    //           <h4>Front End Development</h4>
    //           <p>
    //             Creating things from scratch and enjoy bringing ideas to life in
    //             the browser.
    //           </p>
    //         </div>
    //       </div>

    //       <div class="col-lg-6 col-sm-6">
    //         <div class="service box-2 mb-40">
    //           <i class="fas fa-code"></i>
    //           <h4>Back End Development</h4>
    //           <p>
    //             Fast and scalable backend solutions ranging from apps based on
    //             wordpress to big custom solutions.
    //           </p>
    //         </div>
    //       </div>

    //       <div class="col-lg-6 col-sm-6">
    //         <div class="service box-2 mb-40">
    //           <i class="fas fa-database"></i>
    //           <h4>Databases</h4>
    //           <p>
    //             Can design, develop, implement, test, and maintain databases.
    //           </p>
    //         </div>
    //       </div>

    //       <div class="col-lg-6 col-sm-6">
    //         <div class="service box-2 mb-40">
    //           <i class="fas fa-gamepad"></i>
    //           <h4>2d/3d Game Development</h4>
    //           <p>
    //             Created small games that makes no sense but are not boring
    //             either!
    //           </p>
    //         </div>
    //       </div>

    //       <div class="col-lg-6 col-sm-6">
    //         <div class="service box-2 mb-40">
    //           <i class="fas fa-mobile-alt"></i>
    //           <h4>App Development</h4>
    //           <p>
    //             Building Mobile applications that help grow you and your
    //             business.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
};

export default About;
