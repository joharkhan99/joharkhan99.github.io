import React from "react";

const Education = () => {
  const data = [
    {
      id: 1,
      duration: "2019 — 2024",
      degree: "BSc. Software Engineering",
      university: "COMSATS University",
      location: "Islamabad, Pakistan",
    },
  ];
  return (
    <section id="education" className="my-12">
      <div className="text-sm">
        <p className="mb-1 text-color1">Education</p>
        <div className="my-5 flex flex-col gap-y-4">
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-[#2b2b2b] hover:bg-[#313131] transition-all duration-200 p-3 rounded-md shadow-sm"
              >
                <div className="flex flex-row gap-5 items-start text-sm">
                  <p className="whitespace-nowrap text-xs text-color3">
                    {item.duration}
                  </p>
                  <div className="flex flex-col items-start">
                    <p>
                      {item.degree}
                      <span className="text-color3"> at </span>
                      {item.university}
                    </p>
                    <p className="text-color2">{item.location}</p>
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

export default Education;
