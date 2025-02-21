"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import Link from "next/link";

const AboutSection = () => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  // TODO:
  //   const sendEstimationRequest = async (e: { preventDefault: () => void }) => {
  //     e.preventDefault();

  //     setLoading(true);

  //     emailjs
  //       .send(
  //         "service_6gs5319",
  //         "template_0lzto0f",
  //         { phone },
  //         "apQJg2DtjcCfWOzGP"
  //       )
  //       .then(
  //         (response) => {
  //           console.log("SUCCESS!", response.status, response.text);
  //           setLoading(false);
  //           setPhone("");
  //           toast.success("Request sent successfully!");
  //         },
  //         (error) => {
  //           console.log("FAILED...", error);
  //           setLoading(false);
  //         }
  //       );
  //   };

  return (
    <section className="bg-about_hero relative flex h-full min-h-screen bg-center bg-no-repeat md:bg-cover">
      <div className="relative z-10 flex w-[900px] flex-col items-center gap-4 md:pl-28 pt-36 text-center sm:mt-8 md:mt-0 md:items-start md:justify-center md:py-10 md:pt-0 lg:gap-7">
        <h1
          data-aos="fade-up"
          className="text-center text-3xl font-bold text-white sm:text-5xl md:text-left md:text-6xl xl:text-[70px]"
        >
          Professional Services
        </h1>
        <p
          data-aos="fade-up"
          className="hidden w-[80%] text-center leading-relaxed text-white md:text-left lg:block xl:text-lg"
        >
          Lamb Medical offers a range of aesthetic services tailored to your
          individual needs. Plus, you don’t have to be a member of our concierge
          practice to enjoy them!
        </p>
        <p
          data-aos="fade-up"
          className="block leading-loose text-white lg:hidden"
        >
          At Lamb Medical, we know your time is valuable. That’s why we offer
          personalized, concierge-style care, giving you direct access to your
          doctor and the attention you deserve.
        </p>

        <div
          data-aos="fade-up"
          className="mt-8 flex h-max items-center justify-center gap-6 font-poppins font-semibold md:justify-start md:gap-10"
        >
          <Link href="#">
            <button className="h-20 rounded-md bg-primary px-12 text-sm text-white transition hover:opacity-70 sm:text-base md:px-14">
              Explore Services
            </button>
          </Link>
          <Link href="#">
            <button className="h-20 rounded-md bg-white px-12 text-sm text-primary transition hover:opacity-70 sm:text-base md:px-14">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
