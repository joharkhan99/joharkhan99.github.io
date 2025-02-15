import React from "react";

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
          tagline: "Network Benchmarking Product",
          image: require("../assets/portfolio/tela.png"),
          description:
            "TELA Network Benchmarking Product. TELA Network Benchmarking Product. TELA Network Benchmarking Product.",
        },
        {
          id: "KasparProject2",
          name: "TiffinBox",
          tagline: "Network Benchmarking Product",
          image: require("../assets/portfolio/tiffin.png"),
          description:
            "TELA Network Benchmarking Product. TELA Network Benchmarking Product. TELA Network Benchmarking Product.",
        },
        {
          id: "KasparProject3",
          name: "Post Link POS",
          tagline: "Network Benchmarking Product",
          image: require("../assets/portfolio/pos.png"),
          description:
            "TELA Network Benchmarking Product. TELA Network Benchmarking Product. TELA Network Benchmarking Product.",
        },
        {
          id: "KasparProject4",
          name: "Qwqer",
          tagline: "Network Benchmarking Product",
          image: require("../assets/portfolio/qwqer.png"),
          description:
            "TELA Network Benchmarking Product. TELA Network Benchmarking Product. TELA Network Benchmarking Product.",
        },
        {
          id: "KasparProject5",
          name: "Cars Management System",
          tagline: "Network Benchmarking Product",
          image: require("../assets/portfolio/tela.png"),
          description:
            "TELA Network Benchmarking Product. TELA Network Benchmarking Product. TELA Network Benchmarking Product.",
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
          tagline: "Network Benchmarking Product",
          image: require("../assets/portfolio/savour.png"),
          description:
            "TELA Network Benchmarking Product. TELA Network Benchmarking Product. TELA Network Benchmarking Product.",
        },
        {
          id: "CPR2",
          name: "BME",
          tagline: "Network Benchmarking Product",
          image: require("../assets/portfolio/bme.png"),
          description:
            "TELA Network Benchmarking Product. TELA Network Benchmarking Product. TELA Network Benchmarking Product.",
        },
        {
          id: "CPR3",
          name: "Winston Investment",
          tagline: "Network Benchmarking Product",
          image: require("../assets/portfolio/winstoninvestment.png"),
          description:
            "TELA Network Benchmarking Product. TELA Network Benchmarking Product. TELA Network Benchmarking Product.",
        },
        {
          id: "CPR4",
          name: "Medikay Cardiac Hospital",
          tagline: "Network Benchmarking Product",
          image: require("../assets/portfolio/medikay.png"),
          description:
            "TELA Network Benchmarking Product. TELA Network Benchmarking Product. TELA Network Benchmarking Product.",
        },
      ],
    },
  ];
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
            return (
              <div
                key={item.id}
                className="bg-[#2b2b2b] hover:bg-[#313131] transition-all duration-200 p-3 rounded-md shadow-sm"
              >
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

                  <div className="mb-3 flex flex-row items-center gap-0 justify-start">
                    {item.projects?.map((project) => {
                      return (
                        <button
                          key={project.id}
                          onClick={() =>
                            alert(
                              "Please wait. I am working on the project details part!"
                            )
                          }
                          className="w-24 h-16 rounded-md overflow-hidden cursor-pointer border-2 border-transparent hover:border-teal-400 p-0.5"
                        >
                          <img
                            src={project.image}
                            alt={project.name}
                            title="Details Coming Soon!"
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
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
