"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import Link from "next/link";
import Wrapper from "../Wrapper";
import Image from "next/image";

const MeetTheTeam = () => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEstimationRequest = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_6gs5319",
        "template_0lzto0f",
        { phone },
        "apQJg2DtjcCfWOzGP"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
          setPhone("");
          toast.success("Request sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error);
          setLoading(false);
        }
      );
  };
  return (
    <section className="w-full">
      <div className="w-full ">
        <div className="w-full p-5 sm:p-10 md:p-14 max-w-[1400px] mx-auto">
          <h1
            data-aos="fade-up"
            className="text-[#12121299] md:block hidden font-rubik font-semibold text-6xl leading-tight"
          >
            Meet the Team
          </h1>
          <h1
            data-aos="fade-up"
            className="text-[#12121299] font-work_sans text-lg leading-loose lg:w-[77%] mt-5"
          >
            Get to know the passionate professionals behind Lamb Medical. Our
            team is dedicated to delivering personalized, concierge-style care
            designed around you.
          </h1>
        </div>
        <div
          data-aos="fade-up"
          className="w-full grid grid-cols-5 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-12"
        >
          <Image
            src="/4.png"
            width={600}
            height={400}
            className="w-full col-span-5 md:col-span-3 h-[300px] md:h-[400px]"
            alt="empowering"
          />
          <Image
            src="/5.png"
            width={600}
            height={400}
            className="w-full col-span-1 h-[300px] md:h-[400px]"
            alt="empowering"
          />
          <Image
            src="/6.png"
            width={600}
            height={400}
            className="w-full col-span-1 h-[300px] md:h-[400px]"
            alt="empowering"
          />
          <Image
            src="/7.png"
            width={600}
            height={400}
            className="w-full col-span-1 h-[300px] md:h-[400px]"
            alt="empowering"
          />
          <Image
            src="/8.png"
            width={600}
            height={400}
            className="w-full col-span-1 h-[300px] md:h-[400px]"
            alt="empowering"
          />
          <Image
            src="/9.png"
            width={600}
            height={400}
            className="w-full col-span-1 h-[300px] md:h-[400px]"
            alt="empowering"
          />
          <Image
            src="/10.png"
            width={600}
            height={400}
            className="w-full col-span-1 h-[300px] md:h-[400px]"
            alt="empowering"
          />
          <Image
            src="/11.png"
            width={600}
            height={400}
            className="w-full col-span-1 h-[300px] md:h-[400px]"
            alt="empowering"
          />
          <Image
            src="/12.png"
            width={600}
            height={400}
            className="w-full col-span-1 h-[300px] md:h-[400px]"
            alt="empowering"
          />
          <Image
            src="/13.png"
            width={600}
            height={400}
            className="w-full col-span-1 h-[300px] md:h-[400px]"
            alt="empowering"
          />
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
