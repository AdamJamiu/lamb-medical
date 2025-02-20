"use client";

import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard";
import { all_services, IServices } from "@/app/data/services";

const OurServices = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const first_three_Services = all_services.slice(0, 3);
  const [services, setServices] = useState<IServices[]>(first_three_Services);

  useEffect(() => {
    if (isExpanded) {
      setServices(all_services);
    } else {
      setServices(first_three_Services);
    }
  }, [isExpanded]);

  return (
    <section className="bg-[#F1F1F1] w-full py-10 px-5 md:py-20 lg:py-32">
      <div className="w-full p-5 sm:p-10 md:p-14 max-w-[1400px] mx-auto">
        <h1
          data-aos="fade-up"
          className="text-[#12121299] font-rubik font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
        >
          Our Services
        </h1>

        <h2
          data-aos="fade-up"
          className="text-[#12121299] font-work_sans md:text-lg leading-loose lg:w-[77%] mt-5"
        >
          Discover our range of innovative solutions designed to support your
          health, wellness, and confidence.
        </h2>
        <button
          onClick={() => setIsExpanded((prev) => !prev)}
          className="text-white h-20 px-12 md:px-14 rounded-md bg-primary transition hover:opacity-70 sm:text-base text-sm font-poppins font-semibold mt-10"
        >
          {isExpanded ? "See Less" : "See all services"}
        </button>

        <div className="w-full mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((item, index) => (
            <ServiceCard
              key={index}
              title={item.title}
              description={item.description}
              bgImgSrc={item.bgImgSrc}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
