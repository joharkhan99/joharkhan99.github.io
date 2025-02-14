import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="flex flex-row items-center gap-5">
        <div className="">
          <img
            src={require("../assets/me2.jpg")}
            alt="Johar Khan"
            className="rounded-full w-24 h-24 object-cover"
          />
        </div>

        <div className="flex flex-col items-start justify-center">
          <h1 className="text-color1 text-2xl font-bold">Johar Khan</h1>
          <p className="text-color2 text-sm">Software Engineer</p>
        </div>
      </div>

      <div className="text-sm my-10">
        <p className="mb-1 text-color1">About</p>
        <p className="text-color2">
          I’m a <span className="text-color1">software engineer</span> who
          enjoys building things that work well and make sense. I’ve worked with{" "}
          <span className="text-color1">
            startups, service-based companies, and freelance clients
          </span>
          , building <span className="text-color1">web and mobile apps</span>,
          integrating systems, and solving real-world problems. I spend most of
          my time writing code, fixing bugs, and figuring out how to make things
          run smoother.
          <br />
          <br />I started out just being curious about how websites work, and
          over time, that curiosity turned into a job I genuinely enjoy. I’ve
          built web and mobile apps, worked with data, and worked with various{" "}
          <span className="text-color1">APIs</span>. It’s cool to see an idea
          turn into something people can actually use.
          <br />
          <br />
          When I’m not coding, I’m usually reading up on something new in tech
          or experimenting with side projects. I also like checking out
          <span className="text-color1"> open-source projects</span> and
          contributing where I can. It’s a good way to learn and help out at the
          same time.
          <br />
          <br />
          That’s pretty much me – straightforward, curious, and always building.
        </p>
      </div>
    </section>
  );
};

export default About;
