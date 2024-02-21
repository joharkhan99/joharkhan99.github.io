import React from "react";

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

  return (
    <div class="page pt-resume" data-simplebar>
      <section class="container">
        <div class="header-page mt-70 mob-mt">
          <h2>Resume</h2>
          <span></span>
        </div>

        <div class="row mt-100">
          <div class="col-lg-6 col-sm-12">
            <div class="header-box mb-50">
              <h3>Experience</h3>
            </div>

            <div class="experience box-1">
              {Experience.map((exp, index) => (
                <div class="item" key={index}>
                  <div class="main">
                    <h4>{exp.title}</h4>
                    <div class="d-flex justify-content-between mb-4 align-content-center">
                      <p class="m-0">
                        {exp.company} <br />
                        {exp.location}
                      </p>
                      <p class="m-0">
                        <i class="far fa-calendar-alt"></i>
                        {exp.date}
                      </p>
                    </div>
                  </div>
                  <p>{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div class="col-lg-6 col-sm-12">
            <div>
              <div class="header-box mb-50 mob-box-mt">
                <h3>Education</h3>
              </div>
              <div class="experience box-2">
                {Education.map((edu, index) => (
                  <div class="item" key={index}>
                    <div class="main">
                      <h4>{edu.title}</h4>
                      <div class="d-flex justify-content-between mb-4 align-content-center">
                        <p class="m-0">
                          {edu.company} <br />
                          {edu.location}
                        </p>
                        <p class="m-0">
                          <i class="far fa-calendar-alt"></i>
                          {edu.date}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-50 skills">
              <div class="header-box mb-50 mob-box-mt">
                <h3>Skills</h3>
              </div>
              <div class="experience box-2">
                {Skills.map((skill, index) => (
                  <div class="item" key={index}>
                    <div class="main">
                      <h4>{skill.title}</h4>
                      <ul>
                        {skill.skills.map((s, index) => (
                          <li key={index}>{s}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
