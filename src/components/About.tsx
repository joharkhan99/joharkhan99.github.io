import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="flex sm:flex-row sm:items-center sm:justify-between flex-col flex-wrap gap-y-2">
        <div className="flex flex-row items-center gap-5">
          <div className="">
            <img
              src={require("../assets/me2.jpg")}
              alt="Johar Khan"
              className="rounded-full w-24 h-24 object-cover"
            />
          </div>

          <div className="flex flex-col items-start justify-center">
            <h1 className="dark:text-color1 text-lightColor1 text-2xl font-bold">
              Johar Khan
            </h1>
            <p className="dark:text-color2 text-lightColor2 text-sm">
              Software Engineer
            </p>
          </div>
        </div>

        <a
          href="https://www.linkedin.com/in/johar-khan"
          target="_blank"
          rel="noopener noreferrer"
          className="items-center gap-2 text-sm text-white bg-gradient-to-r from-green-500 to-teal-600 rounded-full px-2 py-2 shadow-lg hover:from-teal-600 hover:to-green-500 transition-all duration-500 ease-in-out text-center block"
        >
          ⚡ Discuss your Project!
        </a>
      </div>

      <div className="text-sm my-10">
        <p className="mb-1 dark:text-color1 text-lightColor1">About</p>
        <p className="dark:text-color2 text-lightColor2">
          I’m a
          <span className="dark:text-color1 text-lightColor1 px-1">
            software engineer
          </span>
          who enjoys building things that work well and make sense. I’ve been
          fortunate to work with
          <span className="dark:text-color1 text-lightColor1 px-1">
            startups, service companies, and freelance clients,
          </span>
          building
          <span className="dark:text-color1 text-lightColor1 px-1">
            web and mobile apps,
          </span>
          integrating systems, and tackling real-world problems. Most days,
          you'll find me writing code, squashing bugs, and trying to figure out
          smarter ways to do things.
          <br />
          <br />
          How'd I get here?
          <span className="dark:text-color1 text-lightColor1 px-1">
            Curiosity.
          </span>
          Plain and simple. I wanted to know how websites ticked, and that
          turned into a job I actually like. It's pretty cool to take an idea
          and turn it into something real people use.
          <br />
          <br />
          When I’m not coding, I’m usually diving into something new in tech or
          experimenting with side projects. I also enjoy checking out
          <span className="dark:text-color1 text-lightColor1 px-1">
            open-source projects
          </span>
          and contributing when I can – it's a great way to learn and give back.
          <br />
          <br />
          So, that’s me – straightforward, curious, and always looking to build
          something better. I'm not trying to be a know-it-all, just someone who
          enjoys making things work.
        </p>
      </div>

      <div className="flex flex-row">
        <img
          src={require("../assets/hike.png")}
          alt="Johar Khan"
          loading="lazy"
          className="object-contain h-[350px] w-full"
        />
      </div>
    </section>
  );
};

export default About;
