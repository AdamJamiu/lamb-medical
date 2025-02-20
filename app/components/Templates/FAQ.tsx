"use client";

import { IFaq } from "@/app/data/faq";
import { IoAddCircleSharp } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

const FAQ = ({ data }: { data: IFaq[] }) => {
  return (
    <section className="w-full py-10 px-5 md:py-20 lg:py-32 bg-white">
      <div
        data-aos="fade-up"
        className="w-full mx-auto max-w-[1200px] flex flex-col gap-7 md:gap-10 divide-y-[0.4px] divide-[#D9D9D9]"
      >
        {data.map((item: IFaq, index) => (
          <FaqItemButton item={item} key={index} />
        ))}
      </div>
    </section>
  );
};

const FaqItemButton = ({ item }: { item: IFaq }) => {
  const [height, setHeight] = useState<number | "auto">(0);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isExpanded, item?.content]); // Measure height when content changes

  return (
    <div ref={contentRef} className={`${isExpanded ? "" : "pb-8"} w-full pt-5`}>
      <div className="w-full flex justify-between items-center gap-3">
        <p className="text-grey-700 font-rubik text-sm md:text-base lg:text-lg font-medium">
          {item.title}
        </p>
        <button
          className="lg:w-[35px] lg:h-[35px] w-[30px] h-[30px]"
          onClick={handleToggle}
        >
          {!isExpanded ? (
            <IoAddCircleSharp className="h-full w-full" />
          ) : (
            <IoIosCloseCircle className="w-full h-full" />
          )}
        </button>
      </div>

      <div
        className="w-full transition-[max-height] max-h-max ease duration-300 overflow-hidden"
        style={{
          height: isExpanded ? `${height}px` : "0px",
        }}
      >
        <div
          ref={contentRef}
          className="w-full py-4 md:pr-7 lg:pr-10 xl:pr-16 text-[#55534E] font-medium text-sm sm:text-sm md:text-base"
        >
          <p>{item.content}</p>
        </div>
      </div>
    </div>
  );
};
export default FAQ;
