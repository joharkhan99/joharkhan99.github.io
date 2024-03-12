import React from "react";
import { Boxes, BoxesCore } from "./aceternity/bg-boxes.tsx";
import { cn } from "../utils/cn.ts";
import { ContainerScroll } from "./aceternity/scroll-animation.tsx";

const Resume = () => {
  const Experience = [
    {
      title: "Full Stack Developer",
      company: "Freelancer",
      location: "Remote",
      date: "12/2021 - Present",
      description: `I participated in the development of various projects with a team.
      Developed websites using various frameworks and programming
      technologies, including PHP, MySQL, CSS/HTML, Javascript, Databases,
      JQuery, React, Node.js/Express, CodeIgniter, and Laravel.
      Hands-on experience using cPanel, phpMyAdmin, DNS records, and other
      various aspects of web servers such as Addon domains, email, FTP, and SSL.
      Hired and directed multiple full-stack developers, working to establish key
      systems in the business.`,
    },
    {
      title: "Data Science Intern",
      company: "Glowing Soft Technologies",
      location: "Remote",
      date: "07/2023 - 09/2023",
      description: `Engaging in real-world data science projects, honing my data visualisation,
      statistical analysis, and analytical problem-solving expertise.
      Collaborating with seasoned data professionals and gaining insights into
      industry best practices and emerging trends in data science.
      Using Python and different libraries to develop data applications and
      solutions that provide actionable insights.`,
    },
    {
      title: "Full Stack Developer",
      company: "Kaspar Consulting Services",
      location: "Remote",
      date: "02/2022 - 11/2022",
      description: `Collaborating with 3+ agencies, we developed websites for clients in the food
      delivery, entertainment, and logistics industries.
      I worked on TELA software. A telecommunication product to benchmark
      network data in South Africa and Pakistan.
      Developed full-stack web applications that processed, analysed, and
      rendered data visually.`,
    },
    {
      title: "Web Developer",
      company: "Constantine PR & Communications",
      location: "Islamabad, Pakistan",
      date: "08/2021 - 03/2022",
      description: `Designed and optimized user-friendly applications, boosting website
      conversion rates and customer satisfaction.
      I worked with a team of four web developers to develop innovative systems
      that will help each section save
      both man-hours and manpower.
      Mobilized and optimized client applications for compatibility across devices,
      ensuring exceptional performance.`,
    },
    {
      title: "Web Developer",
      company: "Infology Solutions",
      location: "Islamabad, Pakistan",
      date: "02/2021 - 08/2021",
      description: `70% of increment in skills like computer maintenance, web application
      development, web design and increased my programming skills.
      Created and maintained 5+ web applications for numerous national and
      foreign clients.
      Facilitated launch of new corporate website, increasing web traffic by 32%
      over year prior.
      Utilised creativity and technical expertise to craft simple and fun games.`,
    },
  ];

  const Education = [
    {
      title: "Bs. Software Engineering",
      company: "Comsats University",
      location: "Islamabad, Pakistan",
      date: "09/2019 - 01/2024",
    },
  ];

  const Skills = [
    {
      title: "Front-End Languages",
      skills: [
        "JavaScript",
        "React",
        "HTML/CSS",
        "Bootstrap",
        "Tailwind",
        "Vue JS",
        "JQuery",
        "Next JS",
        "TypeScript",
      ],
    },
    {
      title: "Backend Languages",
      skills: [
        "PHP",
        "Node JS",
        "Express JS",
        "Laravel",
        "Python",
        "C#",
        "JAVA",
        "AWS",
        "Spring Boot (Beginner)",
        "Solidity",
        "JUnit (Beginner)",
        "Jenkins",
      ],
    },
    {
      title: "Mobile App Development",
      skills: ["React Native", "Expo", "Flutter", "Dart", "Nativewind"],
    },
    {
      title: "Databases",
      skills: [
        "MYSQL",
        "MongoDB",
        "Firebase",
        "PostgreSQL",
        "IPFS",
        "Cloudinary",
      ],
    },
    {
      title: "CMS Systems",
      skills: ["WordPress", "Webflow"],
    },
    {
      title: "Tools",
      skills: [
        "Unity",
        "Github/Git",
        "Jupyter Notebook",
        "JIRA/Trello",
        "Postman",
        "NPM",
        "Android Studio",
        "VS Code",
      ],
    },
  ];

  const users = [
    {
      name: "Manu Arora",
      designation: "Founder, Algochurn",
      image: "https://picsum.photos/id/10/300/300",
      badge: "Mentor",
    },
    {
      name: "Sarah Singh",
      designation: "Founder, Sarah's Kitchen",
      image: "https://picsum.photos/id/11/300/300",
      badge: "Mentor",
    },
    {
      name: "John Doe",
      designation: "Software Engineer, Tech Corp",
      image: "https://picsum.photos/id/12/300/300",
      badge: "Mentor",
    },
    {
      name: "Jane Smith",
      designation: "Product Manager, Innovate Inc",
      image: "https://picsum.photos/id/13/300/300",
      badge: "Mentor",
    },
    {
      name: "Robert Johnson",
      designation: "Data Scientist, DataWorks",
      image: "https://picsum.photos/id/14/300/300",
      badge: "Mentor",
    },
    {
      name: "Emily Davis",
      designation: "UX Designer, DesignHub",
      image: "https://picsum.photos/id/15/300/300",
      badge: "Mentor",
    },
    {
      name: "Michael Miller",
      designation: "CTO, FutureTech",
      image: "https://picsum.photos/id/16/300/300",
      badge: "Mentor",
    },
    {
      name: "Sarah Brown",
      designation: "CEO, StartUp",
      image: "https://picsum.photos/id/17/300/300",
    },
    {
      name: "James Wilson",
      designation: "DevOps Engineer, CloudNet",
      image: "https://picsum.photos/id/18/300/300",
      badge: "Something",
    },
    {
      name: "Patricia Moore",
      designation: "Marketing Manager, MarketGrowth",
      image: "https://picsum.photos/id/19/300/300",
      badge: "Mentor",
    },
    {
      name: "Richard Taylor",
      designation: "Frontend Developer, WebSolutions",
      image: "https://picsum.photos/id/20/300/300",
    },
    {
      name: "Linda Anderson",
      designation: "Backend Developer, ServerSecure",
      image: "https://picsum.photos/id/21/300/300",
    },
    {
      name: "William Thomas",
      designation: "Full Stack Developer, FullStack",
      image: "https://picsum.photos/id/22/300/300",
      badge: "Badger",
    },
    {
      name: "Elizabeth Jackson",
      designation: "Project Manager, ProManage",
      image: "https://picsum.photos/id/23/300/300",
      badge: "Mentor",
    },
    {
      name: "David White",
      designation: "Database Administrator, DataSafe",
      image: "https://picsum.photos/id/24/300/300",
      badge: "Advocate",
    },
    {
      name: "Jennifer Harris",
      designation: "Network Engineer, NetConnect",
      image: "https://picsum.photos/id/25/300/300",
    },
    {
      name: "Charles Clark",
      designation: "Security Analyst, SecureIT",
      image: "https://picsum.photos/id/26/300/300",
    },
    {
      name: "Susan Lewis",
      designation: "Systems Analyst, SysAnalyse",
      image: "https://picsum.photos/id/27/300/300",
    },
    {
      name: "Joseph Young",
      designation: "Mobile Developer, AppDev",
      image: "https://picsum.photos/id/28/300/300",
      badge: "Mentor",
    },
    {
      name: "Margaret Hall",
      designation: "Quality Assurance, BugFree",
      image: "https://picsum.photos/id/29/300/300",
      badge: "Developer",
    },
  ];

  return (
    <>
      <div id="resume" className="relative py-6 pt-14">
        <div className="h-auto relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
          <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
          <Boxes />

          <div className="flex flex-col overflow-hidden">
            <ContainerScroll
              users={users}
              titleComponent={
                <>
                  <h1 className="text-4xl font-semibold text-black dark:text-white">
                    Unleash the power of <br />
                    <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                      Scroll Animations
                    </span>
                  </h1>
                </>
              }
            />
          </div>
        </div>
      </div>
    </>

    // <div class="page pt-resume" data-simplebar>
    //   <section class="container">
    //     <div class="header-page mt-70 mob-mt">
    //       <h2>Resume</h2>
    //       <span></span>
    //     </div>

    //     <div class="row mt-100">
    //       <div class="col-lg-6 col-sm-12">
    //         <div class="header-box mb-50">
    //           <h3>Experience</h3>
    //         </div>

    //         <div class="experience box-1">
    //           {Experience.map((exp, index) => (
    //             <div class="item" key={index}>
    //               <div class="main">
    //                 <h4>{exp.title}</h4>
    //                 <div class="d-flex justify-content-between mb-4 align-content-center">
    //                   <p class="m-0">
    //                     {exp.company} <br />
    //                     {exp.location}
    //                   </p>
    //                   <p class="m-0">
    //                     <i class="far fa-calendar-alt"></i>
    //                     {exp.date}
    //                   </p>
    //                 </div>
    //               </div>
    //               <p>{exp.description}</p>
    //             </div>
    //           ))}
    //         </div>
    //       </div>

    //       <div class="col-lg-6 col-sm-12">
    //         <div>
    //           <div class="header-box mb-50 mob-box-mt">
    //             <h3>Education</h3>
    //           </div>
    //           <div class="experience box-2">
    //             {Education.map((edu, index) => (
    //               <div class="item" key={index}>
    //                 <div class="main">
    //                   <h4>{edu.title}</h4>
    //                   <div class="d-flex justify-content-between mb-4 align-content-center">
    //                     <p class="m-0">
    //                       {edu.company} <br />
    //                       {edu.location}
    //                     </p>
    //                     <p class="m-0">
    //                       <i class="far fa-calendar-alt"></i>
    //                       {edu.date}
    //                     </p>
    //                   </div>
    //                 </div>
    //               </div>
    //             ))}
    //           </div>
    //         </div>

    //         <div className="mt-50 skills">
    //           <div class="header-box mb-50 mob-box-mt">
    //             <h3>Skills</h3>
    //           </div>
    //           <div class="experience box-2">
    //             {Skills.map((skill, index) => (
    //               <div class="item" key={index}>
    //                 <div class="main">
    //                   <h4>{skill.title}</h4>
    //                   <ul>
    //                     {skill.skills.map((s, index) => (
    //                       <li key={index}>{s}</li>
    //                     ))}
    //                   </ul>
    //                 </div>
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
};

export default Resume;
