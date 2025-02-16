import React from "react";
import "./projects.css";
import { CiGlobe } from "react-icons/ci";
import { PiGithubLogoLight } from "react-icons/pi";

const PersonalProjects = () => {
  const data = [
    {
      title: "GenieVision: AI Text & Image",
      image: require("../assets/portfolio/genievision.png"),
      link: "https://play.google.com/store/apps/details?id=com.jka.genievision",
      description:
        "Ask questions, explain images, get recipes & more! Powered by AI.",
      github: "https://github.com/joharkhan99/genievision-chat-and-image-ai",
      website:
        "https://play.google.com/store/apps/details?id=com.jka.genievision&hl=en",
    },
    {
      title: "Unit Guru: Convert any Unit",
      image: require("../assets/portfolio/unitguru.png"),
      link: "https://play.google.com/store/apps/details?id=com.jka.unitguru",
      description:
        "Unit Guru is your go-to app for quick and accurate unit conversions. Whether you're dealing with mass, area, length, volume, temperature, or any other unit, Unit Guru has got you covered!",
      github: "https://github.com/joharkhan99/unitguru",
      website: "https://play.google.com/store/apps/details?id=com.jka.unitguru",
    },
    {
      title: "ZigZag Ball 3D Game",
      image: require("../assets/portfolio/zigzag.jpg"),
      link: "https://play.google.com/store/apps/details?id=com.ActivGames.ZigZagBall3D",
      description:
        "ZigZag Ball 3D is a 3D game that allows you to control a ball and avoid obstacles.",
      github: "https://github.com/joharkhan99/zig-zag-ball-3d",
      website:
        "https://play.google.com/store/apps/details?id=com.ActivGames.ZigZagBall3D",
    },
    {
      title: "NFLUENCER Mobile App",
      image: require("../assets/portfolio/nfluencermobile1.png"),
      link: "https://play.google.com/store/apps/details?id=com.joharkhan051.nfluencer&pcampaignid=web_share",
      description:
        "NFLUENCER is a digital platform that allows influencers, freelancers, musicians, artists, consultants, and coaches to create and sell gigs that offer their services to buyers.",
      github: "https://github.com/joharkhan99/Nfluencer-Mobile-App",
      website: "https://github.com/joharkhan99/Nfluencer-Mobile-App",
    },
    {
      title: "NFLUENCER Website",
      image: require("../assets/portfolio/nfluencermock.png"),
      link: "https://nfluencer-website.vercel.app/",
      description:
        "NFLUENCER is a digital platform that allows influencers, freelancers, musicians, artists, consultants, and coaches to create and sell gigs that offer their services to buyers.",
      github: "https://github.com/joharkhan99/Nfluencer-Website",
      website: "https://github.com/joharkhan99/Nfluencer-Website",
    },
    {
      title: "MovieLand: Free Movie Streaming",
      image: require("../assets/portfolio/movieland.png"),
      link: "https://joharkhan.itch.io/movieland",
      description:
        "MovieLand is a free movie streaming app that allows you to watch movies and TV shows for free.",
      github: "https://github.com/joharkhan99/MovieLand",
      website: "https://joharkhan.itch.io/movieland",
    },
    {
      title: "QuickCal: Calendar & Events App",
      image: require("../assets/portfolio/quickcal.png"),
      link: "https://play.google.com/store/apps/details?id=com.jka.quickcal",
      description:
        "QuickCal is a calendar and events app that allows you to create and manage events, set reminders, and view your schedule in a monthly, weekly, or daily view.",
      github: "https://github.com/joharkhan99/quickcal",
      website: "https://play.google.com/store/apps/details?id=com.jka.quickcal",
    },
    {
      title: "Likhdy.com",
      image: require("../assets/portfolio/likhdy.png"),
      link: "https://likhdy.com/",
      description:
        "Likhdy.com was a platform for writers, poets, and authors to write and publish their work.",
      github: "https://github.com/joharkhan99/dream_php_proj",
      website: "https://github.com/joharkhan99/dream_php_proj",
    },
  ];

  return (
    <section id="education" className="my-12">
      <div className="text-sm">
        <p className="mb-1 text-color1">Personal Projects</p>
        <div className="my-5">
          <main>
            {data.map((item, index) => (
              <article
                key={`project-${index}`}
                className="bg-[#2b2b2b] hover:bg-[#313131] transition-all duration-400 rounded-md shadow-md overflow-hidden hover:transform hover:scale-[1.01]"
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="p-2 text-sm pb-0">
                  <h3 className="text-color1 mb-1">{item.title}</h3>
                  <p className="text-color2 text-xs">{item.description}</p>
                </div>
                <div className="flex flex-row items-center justify-between text-xs text-color2 p-2">
                  <a
                    href={item.website}
                    target="_blank"
                    className="p-1 flex flex-row items-center gap-x-1 w-fit bg-[#474747eb] hover:bg-[#3b3b3beb] rounded-md"
                  >
                    <CiGlobe />
                    <span>Visit Website</span>
                  </a>
                  <a
                    href={item.github}
                    target="_blank"
                    className="p-1 flex flex-row items-center gap-x-1 w-fit bg-[#474747eb] hover:bg-[#3b3b3beb] rounded-md"
                  >
                    <PiGithubLogoLight size={14} />
                    <span>Visit Github</span>
                  </a>
                </div>
              </article>
            ))}
          </main>
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;
