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
          I’m a{" "}
          <span className="dark:text-color1 text-lightColor1">
            software engineer
          </span>{" "}
          who enjoys building things that work well and make sense. I’ve worked
          with{" "}
          <span className="dark:text-color1 text-lightColor1">
            startups, service-based companies, and freelance clients
          </span>
          , building{" "}
          <span className="dark:text-color1 text-lightColor1">
            web and mobile apps
          </span>
          , integrating systems, and solving real-world problems. I spend most
          of my time writing code, fixing bugs, and figuring out how to make
          things run smoother.
          <br />
          <br />I started out just being curious about how websites work, and
          over time, that curiosity turned into a job I genuinely enjoy. I’ve
          built web and mobile apps, worked with data, and worked with various{" "}
          <span className="dark:text-color1 text-lightColor1">APIs</span>. It’s
          cool to see an idea turn into something people can actually use.
          <br />
          <br />
          When I’m not coding, I’m usually reading up on something new in tech
          or experimenting with side projects. I also like checking out
          <span className="dark:text-color1 text-lightColor1">
            {" "}
            open-source projects
          </span>{" "}
          and contributing where I can. It’s a good way to learn and help out at
          the same time.
          <br />
          <br />
          That’s pretty much me – straightforward, curious, and always building.
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
