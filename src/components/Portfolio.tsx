import React from "react";
import { Boxes, BoxesCore } from "./aceternity/bg-boxes.tsx";
import { ParallaxScroll } from "./aceternity/parallax-scroll.tsx";
import { LayoutGrid } from "./aceternity/layout-grid.tsx";
import { DirectionAwareHover } from "./aceternity/direction-aware.tsx";
import { GoArrowUpRight } from "react-icons/go";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "QuickCal: Calendar & Events App",
      image: require("../assets/portfolio/quickcal.png"),
      link: "https://play.google.com/store/apps/details?id=com.jka.quickcal",
      className: "md:col-span-2",
    },
    {
      id: 2,
      title: "NFLUENCER Website",
      image: require("../assets/portfolio/nfluencermock.png"),
      link: "https://nfluencer-website.vercel.app/",
      className: "col-span-1",
    },
    {
      id: 3,
      title: "NFLUENCER Mobile App",
      image: require("../assets/portfolio/nfluencermobile1.png"),
      link: "https://play.google.com/store/apps/details?id=com.joharkhan051.nfluencer&pcampaignid=web_share",
      className: "col-span-1",
    },
    {
      id: 4,
      title: "Less More Japan",
      image: require("../assets/portfolio/lessmore.png"),
      link: "https://less-more-japan.vercel.app/",
      className: "md:col-span-2",
    },
    {
      id: 5,
      title: "MovieLand: Free Movie Streaming",
      image: require("../assets/portfolio/movieland.png"),
      link: "https://joharkhan.itch.io/movieland",
      className: "col-span-2",
    },
    {
      id: 6,
      title: "Bueno Express Transport",
      image: require("../assets/portfolio/bueno.png"),
      link: "https://www.buenoexpresstransport.com/",
      className: "col-span-1",
    },
    {
      id: 7,
      title: "LYEL Accountants",
      image: require("../assets/portfolio/lyel.png"),
      link: "https://lyel.co.uk/",
      className: "col-span-1",
    },
    {
      id: 8,
      title: "TELA",
      image: require("../assets/portfolio/tela.png"),
      link: "#",
      className: "md:col-span-2",
    },
    {
      id: 9,
      title: "Postlink POS System",
      image: require("../assets/portfolio/pos.png"),
      link: "https://postlink-erp.co.za/postlink/",
      status: "in development",
      className: "col-span-2",
    },
    {
      id: 10,
      title: "Likhdy.com",
      image: require("../assets/portfolio/likhdy.png"),
      link: "https://likhdy.com/",
      className: "col-span-1",
    },
    {
      id: 11,
      title: "Savour Foods",
      image: require("../assets/portfolio/savour.png"),
      link: "http://bruh.ezyro.com/savour-foods/",
      className: "col-span-1",
    },
    {
      id: 12,
      title: "QWQER",
      image: require("../assets/portfolio/qwqer.png"),
      link: "https://qwqer.pk/",
      className: "md:col-span-2",
    },
    {
      id: 13,

      title: "Tiffin Box",
      image: require("../assets/portfolio/tiffin.png"),
      link: "https://www.tiffinboxcompany.com/",
      className: "col-span-2",
    },

    {
      id: 14,
      title: "Bullion VTU",
      image: require("../assets/portfolio/bullion.png"),
      link: "https://bullionvtu.com/",
      className: "col-span-1",
    },
    {
      id: 15,
      title: "BME Real Estate",
      image: require("../assets/portfolio/bme.png"),
      link: "https://beaumonde-estate.com/",
      className: "col-span-1",
    },
    {
      id: 16,
      title: "Winston Investment",
      image: require("../assets/portfolio/winstoninvestment.png"),
      link: "https://winstoninvestment.co.uk",
      className: "md:col-span-2",
    },
    {
      id: 17,
      title: "InSol",
      image: require("../assets/portfolio/insol.png"),
      link: "https://infologysolutions.com/",
      className: "col-span-2",
    },
    {
      id: 18,
      title: "ZigZag Ball 3D Game",
      image: require("../assets/portfolio/zigzag.webp"),
      link: "https://play.google.com/store/apps/details?id=com.ActivGames.ZigZagBall3D",
      className: "col-span-1",
    },
    {
      id: 19,
      title: "DayCare",
      image: require("../assets/portfolio/daycare.png"),
      link: "https://hellokiddiesdaycare.com/",
      status: "closed",
      className: "col-span-1",
    },
    {
      id: 20,
      title: "Khyrie Allyene",
      image: require("../assets/portfolio/khyrie.png"),
      link: "http://khyriealleyne.com/",
      status: "closed",
      className: "md:col-span-2",
    },
    {
      id: 21,
      title: "Music Player Web App",
      image: require("../assets/portfolio/music.png"),
      link: "http://bruh.ezyro.com/spotifyclone",
      status: "closed",
      className: "md:col-span-2",
    },
  ];

  return (
    <div id="portfolio" className="relative py-6 pt-14 h-full">
      <div className="container mx-auto px-8">
        <div className="relative z-10 text-5xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-500  text-center font-sans font-bold">
          Portfolio
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-14 place-items-center">
          {portfolioItems.map((item, index) => (
            <DirectionAwareHover imageUrl={item.image} key={index}>
              <p className="font-bold text-xl">{item.title}</p>
              <p className="font-normal text-sm mt-2">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <div className="flex gap-2 items-center p-2 rounded-md text-sm text-black bg-white ">
                    <span>View More</span>
                    <GoArrowUpRight />
                  </div>
                </a>
              </p>
            </DirectionAwareHover>
          ))}
        </div>
      </div>

      {/* <LayoutGrid cards={portfolioItems} /> */}
    </div>
  );
};

export default Portfolio;
