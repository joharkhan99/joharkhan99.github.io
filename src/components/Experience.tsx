import React, { useState } from "react";
import ProjectModal from "./ProjectModal.tsx";

const Item = ({ item, openModal }) => {
  return (
    <div className="bg-[#2b2b2b] hover:bg-[#313131] transition-all duration-200 p-3 rounded-md shadow-sm">
      <div className="flex flex-col items-start gap-y-0.5">
        <div className="flex flex-row items-center justify-between w-full text-xs">
          <p className="text-color3">{item.location}</p>
          <p className="text-color3">{item.duration}</p>
        </div>
        <p>
          {item.title} <span className="text-color3">at</span>
          {` ${item.company}`}
        </p>
        <div
          className="text-color2 my-3"
          dangerouslySetInnerHTML={{
            __html: item.description,
          }}
        />

        <div className="mb-3 flex flex-row items-center gap-0 justify-start flex-wrap">
          {item.projects?.map((project) => {
            return (
              <button
                key={project.id}
                onClick={() => openModal(project)}
                className="w-[130px] h-[80px] rounded-md overflow-hidden cursor-pointer border-2 border-transparent hover:border-teal-400 p-0.5"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  title="Open Project Details"
                  className="w-full h-full object-cover rounded-sm"
                />
              </button>
            );
          })}
        </div>

        <div className="flex flex-row gap-1 items-center justify-start text-xs flex-wrap">
          {item.stack.map((skill, index) => (
            <span
              key={index}
              className="rounded-full bg-[#474747eb] p-1 px-2 text-color2"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const data = [
    {
      id: "Job1",
      company: "TheCryptoReviewer",
      title: "FullStack Developer",
      location: "Remote",
      duration: "Jan 2024 — Present",
      description:
        "This was a US-based startup where we built a crypto investment and learning platform that lets users simulate portfolios, track market trends, and learn without risking real money. I worked on both the web and mobile apps, using React Native with Expo and NativeWind for mobile, and React.js (later Next.js) for the web. The backend was built with Node.js, Express, and MongoDB.<br/><br/>The app includes features like user portfolios, a ranking system based on activity, and payment integrations. We haven't released the mobile app yet, but we use internal APKs and iOS builds for testing.",
      stack: [
        "JavaScript",
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "React Native/Expo",
        "Tailwind CSS",
        "Zustand",
        "MongoDB",
      ],
    },
    {
      id: "Job2",
      company: "Freelance",
      title: "FullStack Developer",
      location: "Remote",
      duration: "Dec 2022 — Present",
      description:
        "I’ve worked with clients across fintech, e-commerce, and logistics, delivering 10+ projects that solve real problems. From building AI-powered chatbots to integrating blockchain solutions, I’ve helped businesses simplify operations and engage users.<br/><br/>Notable work includes a US-based bus booking platform that handles 200+ daily reservations, built for reliability and ease of use. I’ve also integrated OpenAI and Gemini into apps for smarter customer interactions and led small, remote teams to ship projects on time.",
      stack: [
        "TypeScript",
        "JavaScript",
        "PHP",
        "Laravel",
        "WordPress",
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "Nest.js",
        "TailwindCSS",
        "MySQL",
        "MongoDB",
        "AWS",
      ],
      projects: [
        {
          id: "Freelance1",
          name: "Bueno Express Transport",
          tagline:
            "Reliable and convenient transportation services across the USA.",
          image: require("../assets/portfolio/bueno.png"),
          description:
            "Bueno Express Transport offers reliable transportation services across the USA. From daily bus routes and guided tours to home-to-home pickups and luggage delivery, they make travel simple and hassle-free for individuals and groups alike.",
        },
        {
          id: "Freelance2",
          name: "Bullion VTU",
          tagline: "Seamless digital currency transactions and bill payments.",
          image: require("../assets/portfolio/bullion.png"),
          description:
            "Bullion VTU is a user-friendly platform for buying and selling digital currencies. It also lets you pay bills easily using your crypto wallet, making everyday transactions faster and more convenient.",
        },
        {
          id: "Freelance3",
          name: "Less More Japan",
          tagline: "Effortless web project estimation for businesses in Japan.",
          image: require("../assets/portfolio/lessmore.png"),
          description:
            "Less More Japan helps businesses in Japan generate quick and accurate time and cost estimates for web projects. With a clean dashboard for admins and an easy interface for users, it's a straightforward tool for efficient project planning.",
        },
      ],
    },
    {
      id: "Job3",
      company: "Kaspar Consulting Services",
      title: "FullStack Developer",
      location: "Islamabad, Pakistan",
      duration: "Feb 2022 — Nov 2022",
      description:
        "At Kaspar Consulting, I worked on a variety of projects, including TELA, a network benchmarking tool that helped telecom providers in South Africa simplify latency analysis and improve client reporting. I also contributed to various management systems, like a car management system and a POS system with barcode scanning and inventory tracking. Additionally, I collaborated with the team on a food delivery app with real-time order tracking and participated in regular code reviews to maintain high-quality, efficient code.",
      stack: [
        "JavaScript",
        "PHP",
        "Laravel",
        "JQuery",
        "Bootstrap CSS",
        "MySQL",
        "PostgreSQL",
        "Azure",
      ],
      projects: [
        {
          id: "KasparProject1",
          name: "TELA",
          tagline:
            "Simplifying network performance analysis for telecom providers in South Africa.",
          image: require("../assets/portfolio/tela.png"),
          description:
            "TELA is a performance analysis tool designed for telecom providers in South Africa. It helps analyze network latency, identify performance bottlenecks, and generate detailed reports. The platform features real-time monitoring, intuitive dashboards, and customizable benchmarking metrics, enabling companies to optimize their services and enhance customer experience.",
        },
        {
          id: "KasparProject2",
          name: "TiffinBox",
          tagline:
            "Streamlining online food ordering with real-time tracking and notifications.",
          image: require("../assets/portfolio/tiffin.png"),
          description:
            "TiffinBox is an online food delivery platform that streamlines the order process from placement to delivery. The system includes features like real-time order tracking, automated notifications, and a user-friendly interface for both customers and restaurant staff. It simplifies logistics management and enhances the overall customer experience.",
        },
        {
          id: "KasparProject3",
          name: "Post Link POS",
          tagline:
            "Optimizing retail operations with an intuitive POS system and barcode scanning.",
          image: require("../assets/portfolio/pos.png"),
          description:
            "Post Link POS is a point-of-sale system tailored for retail businesses, integrating features like barcode scanning, real-time inventory tracking, and sales reporting. The application offers a simple interface for cashiers, detailed analytics for managers, and seamless integration with various payment gateways to ensure smooth operations.",
        },
        {
          id: "KasparProject4",
          name: "Qwqer",
          tagline:
            "Enhancing logistics with efficient delivery tracking and management.",
          image: require("../assets/portfolio/qwqer.png"),
          description:
            "Qwqer is a delivery application designed to provide real-time tracking and efficient logistics management. The platform supports multiple delivery types, route optimization, and live status updates for customers. Its responsive design and intuitive interface make it a reliable choice for businesses needing efficient delivery operations.",
        },
        {
          id: "KasparProject5",
          name: "Cars Management System",
          tagline: "Managing vehicle inventories for automotive business.",
          image: require("../assets/portfolio/cars.webp"),
          description:
            "The Cars Management System is a web-based application developed for automotive businesses to track and manage vehicle inventories for a Japanese client. It includes features like vehicle status updates, maintenance tracking, and detailed reporting. The system also supports multi-user access, making it easier for teams to collaborate.",
        },
      ],
    },
    {
      id: "Job4",
      company: "Constantine PR & Communications",
      title: "Web Developer",
      location: "Islamabad, Pakistan",
      duration: "Aug 2021 — Mar 2022",
      description:
        "I worked on multiple web projects, including real estate platforms like Winston Builders, food service websites for Savour Foods and Howdy’s, as well as healthcare and business sites. My role involved optimizing performance across devices, ensuring a smooth user experience, and collaborating with teams to deliver reliable, client-focused solutions on time.",
      stack: [
        "PHP",
        "JavaScript",
        "WordPress",
        "JQuery",
        "Bootstrap CSS",
        "MySQL",
      ],
      projects: [
        {
          id: "CPR1",
          name: "Savour Foods",
          tagline:
            "Showcasing a leading food chain's services with a responsive website.",
          image: require("../assets/portfolio/savour.png"),
          description:
            "Savour Foods' website is a responsive platform showcasing the restaurant’s menu, locations, and services. It includes an admin dashboard for handling menus, customer feedback forms, and optimized performance for both desktop and mobile devices. The site was built with performance and user experience in mind.",
        },
        {
          id: "CPR2",
          name: "BME (Beau Monde Estates)",
          tagline:
            "Presenting real estate projects with dynamic, user-friendly content.",
          image: require("../assets/portfolio/bme.png"),
          description:
            "BME is a dynamic and content-rich web application developed for a real estate business in Islamabad. The site showcases multiple real estate projects, including partnerships with renowned housing societies like Park View City, Eighteen Islamabad, and Nova City. Each project has its dedicated section with interactive elements such as image galleries, project descriptions, and inquiry forms. I built the entire platform from scratch, integrating an intuitive admin dashboard that allows the management team to update website content effortlessly. The system supports lead generation through inquiry forms and includes social media integration to boost marketing efforts. The dashboard provides full control over project listings, contact information, and blog posts, enabling BME to stay updated without relying on developers for routine changes.",
        },
        {
          id: "CPR3",
          name: "Winston Investment",
          tagline:
            "Highlighting property listings with interactive maps and client inquiry features.",
          image: require("../assets/portfolio/winstoninvestment.png"),
          description:
            "Winston Investment's website serves as a digital showcase for real estate properties and investment opportunities. It features property listings with images, descriptions, and interactive maps. The platform also includes a contact system for potential clients to inquire directly through the site.",
        },
        {
          id: "CPR4",
          name: "Medikay Cardiac Hospital",
          tagline:
            "Providing patient-centric information with appointment booking and resources.",
          image: require("../assets/portfolio/medikay.png"),
          description:
            "Medikay Cardiac Hospital's website serves as an essential digital hub for patients and visitors seeking information about the hospital's services, doctors, and facilities. The platform includes key features like appointment booking, patient education resources, and interactive content to improve user engagement. The site is designed for accessibility across all devices, ensuring a seamless experience for patients of all age groups. Notably, I developed the blog system, allowing the hospital to publish articles, updates, and health-related content to educate and engage the community.",
        },
      ],
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = (project) => {
    setIsModalOpen(true);
    setSelectedProject(project);
  };

  return (
    <section id="experience" className="my-12">
      <div className="text-sm">
        <p className="mb-1 text-color1">Employment History</p>
        <p className="text-color2">
          I’ve worked with startups, service-based companies, and freelance
          clients—each with its own challenges and lessons. Here’s a quick look.
        </p>

        <div className="my-5 flex flex-col gap-y-4">
          {data.map((item) => {
            return <Item item={item} key={item.id} openModal={openModal} />;
          })}
        </div>
      </div>
      {isModalOpen && selectedProject && (
        <ProjectModal toggleModal={closeModal} project={selectedProject} />
      )}
    </section>
  );
};

export default Experience;
