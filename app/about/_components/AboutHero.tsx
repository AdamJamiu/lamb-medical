"use client";

import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import Link from "next/link";

const AboutSection = () => {
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
    <section className="bg-about_hero relative flex h-full min-h-[106vh] bg-center bg-no-repeat md:bg-cover">
      <div className="relative z-10 mx-auto flex w-full md:w-[800px] lg:w-[1400px] flex-col items-center justify-center gap-4 md:pl-28 pt-0 text-center sm:mt-8 md:mt-0 md:py-10 md:pt-0 lg:gap-7">
        <h1
          data-aos="fade-up"
          className="text-center text-4xl font-semibold text-white sm:text-6xl md:text-7xl lg:text-[65px]"
        >
          Expert Care in Aesthetics and Wellness
        </h1>
        <p
          data-aos="fade-up"
          className="hidden w-[80%] text-center leading-relaxed text-white lg:block sm:text-lg lg:text-xl"
        >
          At Lamb Medical, we're dedicated to providing expert care in
          aesthetics, wellness, and concierge medicine. Whether you're focused
          on rejuvenating your look or enhancing your overall well-being, our
          knowledgeable team is here to guide you every step of the way.
        </p>
        <p
          data-aos="fade-up"
          className="block leading-loose text-white lg:hidden sm:text-lg"
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
              Schedule Online
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
