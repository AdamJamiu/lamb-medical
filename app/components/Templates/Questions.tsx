"use client";

import { faq, IFaq } from "@/app/data/faq";
import { IoAddCircleSharp } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

const Questions = () => {
  return (
    <section className="w-full py-10 px-5 md:py-20 lg:py-32 bg-white">
      <div
        data-aos="fade-up"
        className="w-full mx-auto max-w-[1200px] flex flex-col gap-7 md:gap-10 divide-y-[0.4px] divide-[#D9D9D9]"
      ></div>
    </section>
  );
};

export default Questions;
