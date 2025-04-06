import React from "react";

const services = [
  "Frontend Development",
  "Backend Development",
  "API Integration",
  "Mobile App Development",
  "Cloud Deployment",
  "DevOps & CI/CD",
  "Database Management",
  "UI/UX Design",
];

const ServicesSection = () => {
  const duplicatedServices = [...services, ...services, ...services];

  return (
    <div className="overflow-hidden whitespace-nowrap bg-[#222] text-[#fff] w-full py-4">
      <div className="flex animate-marquee gap-5">
        {duplicatedServices.map((service, index) => (
          <>
            <span key={index} className="inline-block uppercase text-lg">
              {service}
            </span>
            <span>•</span>
          </>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
