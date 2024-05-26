import React from "react";
import { BentoGrid, BentoGridItem } from "./aceternity/bento-grid.tsx";
import { GoArrowUpRight } from "react-icons/go";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Unit Guru: Convert any Unit",
      image: require("../assets/portfolio/unitguru.png"),
      link: "https://play.google.com/store/apps/details?id=com.jka.unitguru",
      description:
        "Unit Guru is your go-to app for quick and accurate unit conversions. Whether you're dealing with mass, area, length, volume, temperature, or any other unit, Unit Guru has got you covered!",
    },
    {
      title: "GenieVision: AI Text & Image",
      image: require("../assets/portfolio/genievision.png"),
      link: "https://play.google.com/store/apps/details?id=com.jka.genievision",
      description:
        "Ask questions, explain images, get recipes & more! Powered by AI.",
    },
    {
      title: "QuickCal: Calendar & Events App",
      image: require("../assets/portfolio/quickcal.png"),
      link: "https://play.google.com/store/apps/details?id=com.jka.quickcal",
      description:
        "QuickCal is a calendar and events app that allows you to create and manage events, set reminders, and view your schedule in a monthly, weekly, or daily view.",
      // className: "md:col-span-2",
    },
    {
      title: "NFLUENCER Website",
      image: require("../assets/portfolio/nfluencermock.png"),
      link: "https://nfluencer-website.vercel.app/",
      description:
        "NFLUENCER is a digital platform that allows influencers, freelancers, musicians, artists, consultants, and coaches to create and sell gigs that offer their services to buyers.",
      // className: "col-span-1",
    },
    {
      title: "NFLUENCER Mobile App",
      image: require("../assets/portfolio/nfluencermobile1.png"),
      link: "https://play.google.com/store/apps/details?id=com.joharkhan051.nfluencer&pcampaignid=web_share",
      description:
        "NFLUENCER is a digital platform that allows influencers, freelancers, musicians, artists, consultants, and coaches to create and sell gigs that offer their services to buyers.",
      // className: "col-span-1",
    },
    {
      title: "Less More Japan",
      image: require("../assets/portfolio/lessmore.png"),
      link: "https://less-more-japan.vercel.app/",
      description:
        "Platform for generating time and price estimates for corporate websites and business systems.",
      // className: "md:col-span-2",
    },
    {
      title: "MovieLand: Free Movie Streaming",
      image: require("../assets/portfolio/movieland.png"),
      link: "https://joharkhan.itch.io/movieland",
      description:
        "MovieLand is a free movie streaming app that allows you to watch movies and TV shows for free.",
      // className: "col-span-2",
    },
    {
      title: "Bueno Express Transport",
      image: require("../assets/portfolio/bueno.png"),
      link: "https://www.buenoexpresstransport.com/",
      description:
        "Bueno Express Transport is a transportation company that provides transportation services to the public.",
      // className: "col-span-1",
    },
    {
      title: "LYEL Accountants",
      image: require("../assets/portfolio/lyel.png"),
      link: "https://lyel.co.uk/",
      description:
        "LYEL Accountants is a firm of Chartered Certified Accountants based in London, UK.",
      // className: "col-span-1",
    },
    {
      title: "TELA",
      image: require("../assets/portfolio/tela.png"),
      link: "#",
      description:
        "Telecommunication based product to benchmark and monitor the performance of the network and the quality of service (QoS) provided to the end-users.",
      // className: "md:col-span-2",
    },
    {
      title: "Postlink POS System",
      image: require("../assets/portfolio/pos.png"),
      link: "https://postlink-erp.co.za/postlink/",
      status: "in development",
      description:
        "Postlink is a point of sale system that allows you to manage your business, sales, and inventory.",
      // className: "col-span-2",
    },
    {
      title: "Likhdy.com",
      image: require("../assets/portfolio/likhdy.png"),
      link: "https://likhdy.com/",
      description:
        "Likhdy is a platform for writers, poets, and authors to write and publish their work.",
      // className: "col-span-1",
    },
    {
      title: "Tiffin Box",
      image: require("../assets/portfolio/tiffin.png"),
      link: "https://www.tiffinboxcompany.com/",
      description:
        "Tiffin Box is a food delivery service that delivers food to your doorstep.",
      // className: "col-span-2",
    },
    {
      title: "Savour Foods",
      image: require("../assets/portfolio/savour.png"),
      link: "http://bruh.ezyro.com/savour-foods/",
      description:
        "Savour Foods is a food delivery service that delivers food to your doorstep.",
      // className: "col-span-1",
    },
    {
      title: "QWQER",
      image: require("../assets/portfolio/qwqer.png"),
      link: "https://qwqer.pk/",
      description:
        "QWQER is a platform for ordering food, groceries, and other items.",
      // className: "md:col-span-2",
    },

    {
      title: "Bullion VTU",
      image: require("../assets/portfolio/bullion.png"),
      link: "https://bullionvtu.com/",
      description:
        "Bullion VTU is a platform for buying and selling digital currencies.",
      // className: "col-span-1",
    },
    {
      title: "BME Real Estate",
      image: require("../assets/portfolio/bme.png"),
      link: "https://beaumonde-estate.com/",
      description:
        "BME Real Estate is a real estate company that provides real estate services to the public.",
      // className: "col-span-1",
    },
    {
      title: "Winston Investment",
      image: require("../assets/portfolio/winstoninvestment.png"),
      link: "https://winstoninvestment.co.uk",
      description:
        "Winston Investment is a real estate company that provides real estate services to the public.",
      // className: "md:col-span-2",
    },
    {
      title: "InSol",
      image: require("../assets/portfolio/insol.png"),
      link: "https://infologysolutions.com/",
      description:
        "Corporate website for InSol, a software development company.",
      // className: "col-span-2",
    },
    {
      title: "ZigZag Ball 3D Game",
      image: require("../assets/portfolio/zigzag.webp"),
      link: "https://play.google.com/store/apps/details?id=com.ActivGames.ZigZagBall3D",
      description:
        "ZigZag Ball 3D is a 3D game that allows you to control a ball and avoid obstacles.",
      // className: "col-span-1",
    },
    {
      title: "DayCare",
      image: require("../assets/portfolio/daycare.png"),
      link: "https://hellokiddiesdaycare.com/",
      status: "closed",
      description:
        "DayCare is a platform for parents to find and book daycare services for their children.",
      // className: "col-span-1",
    },
    {
      title: "Khyrie Allyene",
      image: require("../assets/portfolio/khyrie.png"),
      link: "http://khyriealleyne.com/",
      status: "closed",
      description:
        "Khyrie Allyene is a platform for Khyrie Allyene to showcase his work and services.",
      // className: "md:col-span-2",
    },
    {
      title: "Music Player Web App",
      image: require("../assets/portfolio/music.png"),
      link: "http://bruh.ezyro.com/spotifyclone",
      status: "closed",
      description:
        "Music Player is a web app that allows you to listen to music and create playlists.",
      // className: "md:col-span-2",
    },
  ];

  return (
    <div id="portfolio" className="relative py-6 pt-14 h-full pb-14">
      <div className="container mx-auto px-8 relative">
        <div className="relative z-10 text-5xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-500  text-center font-sans font-bold">
          Portfolio
        </div>

        <BentoGrid className="mx-auto mt-14 z-50">
          {portfolioItems.map((item, i) => (
            <BentoGridItem
              key={i}
              item={item}
              className={
                i === 3 || i === 6 || i === 10 || i === 16 || i === 17
                  ? "md:col-span-2"
                  : ""
              }
            />
          ))}
        </BentoGrid>

        <div className="flex justify-center items-center mt-14">
          <a
            href="https://github.com/joharkhan99"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold flex items-center gap-1 group"
          >
            <span>View More on GitHub</span>
            <GoArrowUpRight className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition duration-100" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
