import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import FadeInSection from "../FadeInSection/index.tsx";

const OtherProjects = () => {
  return (
    <div className="p-10 py-[150px] pb-[200px] w-full relative">
      <div className="relative mb-10">
        <h1 className="md:text-[3.4vw] text-3xl text-white font-bold pt-2">
          Project Extras
        </h1>
        <p className="text-sm text-[#b3b3b3] my-2">
          Not the main gig, but still worth a look!
        </p>
      </div>

      <div className="mx-auto md:grid flex flex-col gap-5 w-full sm:grid-cols-2 md:grid-cols-3 md:grid-rows-[300px_300px_400px_400px_300px_400px_100px] md:gap-6">
        {/* Card 1: Tall card spanning 2 rows */}
        <FadeInSection classNames="flex flex-col relative z-0 group overflow-hidden rounded-[24px] bg-white/60 md:row-span-2 md:h-auto h-[400px]">
          <div className="pt-[40px] pb-4 px-4 text-white absolute bottom-0 flex flex-col gap-1 justify-center shadow-2xl shadow-black w-full z-10 h-auto bg-gradient-to-t from-[#151a46e3] via-[#151a46e3] to-transparent">
            <h3 className="md:text-3xl text-xl font-extrabold">
              Hybrid Travel
            </h3>
            <p className="font-medium text-sm">
              A platform to plan trips, book stays, and get travel tips all in
              one place.
            </p>
            <div className="flex items-center flex-row gap-1 flex-wrap">
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                PHP
              </span>
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                Laravel
              </span>
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                MYSQL
              </span>
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                JavaScript
              </span>
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                Bootstrap CSS
              </span>
            </div>
            <div className="flex flex-row items-center justify-between border-t border-t-[#fefefe26] pt-2 mt-1.5">
              <a
                href="https://github.com/joharkhan99/hybridtravel"
                target="_blank"
                className="text-xs flex items-center hover:underline"
              >
                <span>Github</span>
                <IoIosArrowRoundForward
                  className="transform -rotate-45"
                  size={20}
                />
              </a>
            </div>
          </div>
          <img
            src={require("../../assets/portfolio/hybridtravel/1.png")}
            alt="Hybrid Travel project"
            className="absolute top-0 left-0 w-full h-full object-cover -z-10 transition-all group-hover:transform group-hover:scale-105 duration-700"
          />
        </FadeInSection>
        {/* Card 2: Standard card */}
        <FadeInSection classNames="flex flex-col relative z-0 group overflow-hidden rounded-[24px] bg-white/60 md:col-span-2 md:h-auto h-[400px]">
          <div className="pt-[40px] pb-4 px-4 text-white absolute bottom-0 flex flex-col gap-1 justify-center shadow-2xl shadow-black w-full z-10 h-auto bg-gradient-to-t from-[#154046e3] via-[#154046e3] to-transparent">
            <h3 className="md:text-3xl text-xl font-extrabold">
              LessMore Japan
            </h3>
            <p className="font-medium text-sm">
              A free consultation service that guides companies to build
              cost-effective websites with expert advice and subsidy tips.
            </p>
            <div className="flex items-center flex-row gap-1 flex-wrap">
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                JavaScript
              </span>
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                Node.js
              </span>
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                React.js
              </span>
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                Express JS
              </span>
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                MongoDB
              </span>
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                Tailwind CSS
              </span>
            </div>
            <div className="flex flex-row items-center justify-between border-t border-t-[#fefefe26] pt-2 mt-1.5">
              <a
                href="https://frontend-ucp8.onrender.com/"
                target="_blank"
                className="text-xs flex items-center hover:underline"
              >
                <span>Website</span>
                <IoIosArrowRoundForward
                  className="transform -rotate-45"
                  size={20}
                />
              </a>
            </div>
          </div>
          <img
            src={require("../../assets/portfolio/lessmore/feature.png")}
            alt="LessMore Japan project"
            className="absolute top-0 left-0 w-full h-full object-cover -z-10 transition-all group-hover:transform group-hover:scale-105 duration-700"
          />
        </FadeInSection>
        {/* Card 3: Standard card */}
        <FadeInSection classNames="flex flex-col relative z-0 group overflow-hidden rounded-[24px] bg-white/60 md:col-span-2 md:h-auto h-[400px]">
          <div className="pt-[40px] pb-4 px-4 text-white absolute bottom-0 flex flex-col gap-1 justify-center shadow-2xl shadow-black w-full z-10 h-auto bg-gradient-to-t from-[#153346e3] via-[#153346e3] to-transparent">
            <h3 className="md:text-3xl text-xl font-extrabold">
              Lyel Accountants
            </h3>
            <p className="font-medium text-sm">
              A professional website for a Leeds-based accounting firm offering
              tax, bookkeeping, and financial planning services.
            </p>
            <div className="flex items-center flex-row gap-1 flex-wrap">
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                WordPress
              </span>
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                HTML/CSS
              </span>
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                JavaScript
              </span>
            </div>
            <div className="flex flex-row items-center justify-between border-t border-t-[#fefefe26] pt-2 mt-1.5">
              <a
                href="https://lyelaccountants.co.uk/"
                target="_blank"
                className="text-xs flex items-center hover:underline"
              >
                <span>Website</span>
                <IoIosArrowRoundForward
                  className="transform -rotate-45"
                  size={20}
                />
              </a>
            </div>
          </div>
          <img
            src={require("../../assets/portfolio/lyel/feature.png")}
            alt="LessMore Japan project"
            className="absolute top-0 left-0 w-full h-full object-cover -z-10 transition-all group-hover:transform group-hover:scale-105 duration-700"
          />
        </FadeInSection>
        {/* Card 4: Tall card spanning 2 rows */}
        <FadeInSection classNames="flex flex-col relative z-0 group overflow-hidden rounded-[24px] bg-white/60 md:col-span-2 md:h-auto h-[400px]">
          <div className="pt-[40px] pb-4 px-4 text-white absolute bottom-0 flex flex-col gap-1 justify-center shadow-2xl shadow-black w-full z-10 h-auto bg-gradient-to-t from-[#040f0be3] via-[#040f0be3] to-transparent">
            <h3 className="md:text-3xl text-xl font-extrabold">QuickCal</h3>
            <p className="font-medium text-sm">
              A mobile app to plan your events, set reminders, and keep your day
              organized.
            </p>
            <div className="flex items-center flex-row gap-1 flex-wrap">
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                Dart
              </span>
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                Flutter
              </span>
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                HiveDB
              </span>
            </div>
            <div className="flex flex-row items-center justify-between border-t border-t-[#fefefe26] pt-2 mt-1.5">
              <a
                href="https://play.google.com/store/apps/details?id=com.jka.quickcal"
                target="_blank"
                className="text-xs flex items-center hover:underline"
              >
                <span>View App</span>
                <IoIosArrowRoundForward
                  className="transform -rotate-45"
                  size={20}
                />
              </a>
              <a
                href="https://github.com/joharkhan99/quickcal"
                target="_blank"
                className="text-xs flex items-center hover:underline"
              >
                <span>Github</span>
                <IoIosArrowRoundForward
                  className="transform -rotate-45"
                  size={20}
                />
              </a>
            </div>
          </div>
          <img
            src={require("../../assets/portfolio/quickcal/feature.png")}
            alt="LessMore Japan project"
            className="absolute top-0 left-0 w-full h-full object-cover -z-10 transition-all group-hover:transform group-hover:scale-105 duration-700"
          />
        </FadeInSection>
        {/* Card 5: Standard card */}
        <FadeInSection classNames="flex flex-col relative z-0 group overflow-hidden rounded-[24px] bg-white/60 md:h-auto h-[400px]">
          <div className="pt-[40px] pb-4 px-4 text-white absolute bottom-0 flex flex-col gap-1 justify-center shadow-2xl shadow-black w-full z-10 h-auto bg-gradient-to-t from-[#154633e3] via-[#154633e3] to-transparent">
            <h3 className="md:text-3xl text-xl font-extrabold">Qwqer.pk</h3>
            <p className="font-medium text-sm">
              A fast delivery service for sending anything within your city,
              from same-day parcels to bulk shipments.
            </p>
            <div className="flex items-center flex-row gap-1 flex-wrap">
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                JavaScript
              </span>
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                Node.js
              </span>
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                React.js
              </span>
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                Express JS
              </span>
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                MongoDB
              </span>
            </div>
            <div className="flex flex-row items-center justify-between border-t border-t-[#fefefe26] pt-2 mt-1.5">
              <a
                href="https://qwqer.pk"
                target="_blank"
                className="text-xs flex items-center hover:underline"
              >
                <span>Website</span>
                <IoIosArrowRoundForward
                  className="transform -rotate-45"
                  size={20}
                />
              </a>
            </div>
          </div>
          <img
            src={require("../../assets/portfolio/qwqer/feature.png")}
            alt="LessMore Japan project"
            className="absolute top-0 left-0 w-full h-full object-cover -z-10 transition-all group-hover:transform group-hover:scale-105 duration-700"
          />
        </FadeInSection>
        {/* Card 6: Standard card */}
        <FadeInSection classNames="flex flex-col relative z-0 group overflow-hidden rounded-[24px] bg-white/60 md:h-auto h-[400px]">
          <div className="pt-[40px] pb-4 px-4 text-white absolute bottom-0 flex flex-col gap-1 justify-center shadow-2xl shadow-black w-full z-10 h-auto bg-gradient-to-t from-[#461539e3] via-[#461539e3] to-transparent">
            <h3 className="md:text-3xl text-xl font-extrabold">Savour Foods</h3>
            <p className="font-medium text-sm">
              A responsive website featuring the restaurant’s menu, locations,
              and services for a seamless user experience.
            </p>
            <div className="flex items-center flex-row gap-1 flex-wrap">
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                PHP
              </span>
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                MYSQL
              </span>
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                HTML/CSS
              </span>
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                JavaScript
              </span>
            </div>
          </div>
          <img
            src={require("../../assets/portfolio/savour/feature.png")}
            alt="LessMore Japan project"
            className="absolute top-0 left-0 w-full h-full object-cover -z-10 transition-all group-hover:transform group-hover:scale-105 duration-700"
          />
        </FadeInSection>
        {/* Card 8: Standard card */}
        <FadeInSection classNames="flex flex-col relative z-0 group overflow-hidden rounded-[24px] bg-white/60 md:col-span-2 md:h-auto h-[400px]">
          <div className="pt-[40px] pb-4 px-4 text-white absolute bottom-0 flex flex-col gap-1 justify-center shadow-2xl shadow-black w-full z-10 h-auto bg-gradient-to-t from-[#463415e3] via-[#463415e3] to-transparent">
            <h3 className="md:text-3xl text-xl font-extrabold">TiffinBox</h3>
            <p className="font-medium text-sm">
              A food delivery platform linking users with home chefs in Multan.
              Worked on interactive dashboards for easy management.
            </p>
            <div className="flex items-center flex-row gap-1 flex-wrap">
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                JavaScript
              </span>
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                Webflow
              </span>
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                PHP
              </span>
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                Laravel
              </span>
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                Bootstrap CSS
              </span>
            </div>
            <div className="flex flex-row items-center justify-between border-t border-t-[#fefefe26] pt-2 mt-1.5">
              <a
                href="https://tiffinbox.com"
                target="_blank"
                className="text-xs flex items-center hover:underline"
              >
                <span>Website</span>
                <IoIosArrowRoundForward
                  className="transform -rotate-45"
                  size={20}
                />
              </a>
            </div>
          </div>
          <img
            src={require("../../assets/portfolio/tiffinbox/feature.png")}
            alt="LessMore Japan project"
            className="absolute top-0 left-0 w-full h-full object-cover -z-10 transition-all group-hover:transform group-hover:scale-105 duration-700"
          />
        </FadeInSection>
        {/* Card 9: Standard card */}
        <FadeInSection classNames="flex flex-col relative z-0 group overflow-hidden rounded-[24px] bg-white/60 md:col-span-2 md:h-auto h-[400px]">
          <div className="pt-[40px] pb-4 px-4 text-white absolute bottom-0 flex flex-col gap-1 justify-center shadow-2xl shadow-black w-full z-10 h-auto bg-gradient-to-t from-[#154633e3] via-[#154633e3] to-transparent">
            <h3 className="md:text-3xl text-xl font-extrabold">
              GenieVision AI Chat
            </h3>
            <p className="font-medium text-sm">
              An AI-powered app for text generation and image analysis. Users
              can ask questions, manipulate images, and identify objects with
              ease.
            </p>
            <div className="flex items-center flex-row gap-1 flex-wrap">
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                Flutter
              </span>
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                Dart
              </span>
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                HiveDB
              </span>
            </div>
            <div className="flex flex-row items-center justify-between border-t border-t-[#fefefe26] pt-2 mt-1.5">
              <a
                href="https://play.google.com/store/apps/details?id=com.jka.genievision&hl=en"
                target="_blank"
                className="text-xs flex items-center hover:underline"
              >
                <span>View App</span>
                <IoIosArrowRoundForward
                  className="transform -rotate-45"
                  size={20}
                />
              </a>
              <a
                href="https://github.com/joharkhan99/genievision-chat-and-image-ai"
                target="_blank"
                className="text-xs flex items-center hover:underline"
              >
                <span>Github</span>
                <IoIosArrowRoundForward
                  className="transform -rotate-45"
                  size={20}
                />
              </a>
            </div>
          </div>
          <img
            src={require("../../assets/portfolio/genievision/feature.png")}
            alt="LessMore Japan project"
            className="absolute top-0 left-0 w-full h-full object-cover -z-10 transition-all group-hover:transform group-hover:scale-105 duration-700"
          />
        </FadeInSection>
        {/* Card 7: Standard card */}
        <FadeInSection classNames="flex flex-col relative z-0 group overflow-hidden rounded-[24px] bg-white/60 md:h-auto h-[400px]">
          <div className="pt-[40px] pb-4 px-4 text-white absolute bottom-0 flex flex-col gap-1 justify-center shadow-2xl shadow-black w-full z-10 h-auto bg-gradient-to-t from-[#152e46e3] via-[#152e46e3] to-transparent">
            <h3 className="md:text-3xl text-xl font-extrabold">TELA</h3>
            <p className="font-medium text-sm">
              A network benchmarking tool for South African telecom providers,
              automating latency analysis and speeding up report generation
            </p>
            <div className="flex items-center flex-row gap-1 flex-wrap">
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                Laravel
              </span>
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                Bootstrap CSS
              </span>
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                PostgreSQL
              </span>
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                Azure
              </span>
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                Redis
              </span>
            </div>
          </div>
          <img
            src={require("../../assets/portfolio/tela/feature.png")}
            alt="LessMore Japan project"
            className="absolute top-0 left-0 w-full h-full object-cover -z-10 transition-all group-hover:transform group-hover:scale-105 duration-700"
          />
        </FadeInSection>
        {/* Card 11: Tall card spanning 2 rows */}
        <FadeInSection classNames="flex flex-col relative z-0 group overflow-hidden rounded-[24px] bg-white/60 md:col-span-1 md:h-auto h-[400px]">
          <div className="pt-[40px] pb-4 px-4 text-white absolute bottom-0 flex flex-col gap-1 justify-center shadow-2xl shadow-black w-full z-10 h-auto bg-gradient-to-t from-[#154046e3] via-[#154046e3] to-transparent">
            <h3 className="md:text-3xl text-xl font-extrabold">
              Winston Investment
            </h3>
            <p className="font-medium text-sm">
              A responsive real estate platform showcasing properties,
              investment opportunities, and seamless contact options for
              potential clients.
            </p>
            <div className="flex items-center flex-row gap-1 flex-wrap">
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                WordPress
              </span>
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                HTML/CSS
              </span>
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                JavaScript
              </span>
            </div>
          </div>
          <img
            src={require("../../assets/portfolio/winston/feature.png")}
            alt="LessMore Japan project"
            className="absolute top-0 left-0 w-full h-full object-cover -z-10 transition-all group-hover:transform group-hover:scale-105 duration-700"
          />
        </FadeInSection>
        {/* Card 10: Tall card spanning 2 rows */}
        <FadeInSection classNames="flex flex-col relative z-0 group overflow-hidden rounded-[24px] bg-white/60 md:col-span-2 md:h-auto h-[400px]">
          <div className="pt-[40px] pb-4 px-4 text-white absolute bottom-0 flex flex-col gap-1 justify-center shadow-2xl shadow-black w-full z-10 h-auto bg-gradient-to-t from-[#1c1546e3] via-[#1c1546e3] to-transparent">
            <h3 className="md:text-3xl text-xl font-extrabold">Unit Guru</h3>
            <p className="font-medium text-sm">
              A fast and easy-to-use unit converter covering mass, length,
              volume, temperature, and more. Works offline with a built-in
              calculator for quick conversions.
            </p>
            <div className="flex items-center flex-row gap-1 flex-wrap">
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                Flutter
              </span>
              <span className="text-xs font-normal bg-white bg-opacity-20 rounded-full p-1 px-2">
                Dart
              </span>
            </div>
            <div className="flex flex-row items-center justify-between border-t border-t-[#fefefe26] pt-2 mt-1.5">
              <a
                href="https://play.google.com/store/apps/details?id=com.jka.unitguru"
                target="_blank"
                className="text-xs flex items-center hover:underline"
              >
                <span>View App</span>
                <IoIosArrowRoundForward
                  className="transform -rotate-45"
                  size={20}
                />
              </a>
            </div>
          </div>
          <img
            src={require("../../assets/portfolio/unitguru/feature.png")}
            alt="LessMore Japan project"
            className="absolute top-0 left-0 w-full h-full object-cover -z-10 transition-all group-hover:transform group-hover:scale-105 duration-700"
          />
        </FadeInSection>

        {/* Card 12: Tall card spanning 2 rows */}
        <div className="relative overflow-hidden rounded-[24px] bg-[#323232] shadow-xl md:col-span-3 md:h-auto h-[100px]">
          <div className="text-white flex justify-center items-center w-full h-full">
            <p className="font-medium text-sm">⌛⏰👀 More coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherProjects;
