import Link from "next/link";
import { IServices } from "../data/services";

const ServiceCard = ({ title, description, link, bgImgSrc }: IServices) => {
  return (
    <div
      data-aos="fade-up"
      style={{
        backgroundImage: `url(${bgImgSrc})`,
      }}
      className="w-full bg-no-repeat rounded h-[337px] md:h-[474px] bg-contain"
    >
      <div className="relative z-10 p-7 font-rubik flex justify-between items-start flex-col h-full">
        <div className="w-full">
          <h1 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[50px] leading-relaxed">
            {title}
          </h1>

          <p className="text-white text-sm md:text-base lg:text-[20px] font-thin">
            {description}
          </p>
        </div>

        <Link href="#" className="w-full">
          <div className="w-full py-4 px-5 md:px-7 lg:px-8 flex justify-between items-center gap-2 bg-white rounded">
            <p className="font-semibold text-base md:text-lg">Learn more</p>
            <svg
              width="40"
              height="39"
              viewBox="0 0 55 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.879883"
                y="0.280273"
                width="53.6316"
                height="53.6316"
                rx="26.8158"
                fill="#F1F1F1"
              />
              <path
                d="M27.4722 32.6835L33.0588 27.0969L27.4722 21.5103"
                stroke="#8E9BAE"
                stroke-width="2.01119"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
