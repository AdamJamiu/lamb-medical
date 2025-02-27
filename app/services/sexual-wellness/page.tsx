import { Fragment } from "react";
import ServicesHero from "../components/services-hero";
import ServicesTab from "../components/services-tab";
import PRPBreastRejuvenation from "./components/prp-breast-rejuvenation";
import OShot from "./components/o-shot";
import MonalisaTouch from "./components/monalisa-touch";
import MiraDry from "./components/mira-dry";

const sexualWellnessTabItems = [
  { href: "#prp-breast-rejuvenation", label: "PRP Breast Rejuvenation" },
  { href: "#o-shot", label: "O-Shot" },
  { href: "#monalisa-touch", label: "MonaLisa Touch" },
  { href: "#mira-dry", label: "Mira Dry" },
];

export default function SexualWellness() {
  return (
    <Fragment>
      <div className="xs:block hidden">
        <ServicesHero
          image="sexual-wellness/sexual-wellness-cover.png"
          title="Sexual Wellness"
          description="Lamb Medical offers specialized women's health treatments, including Elleebana Lash Lift, O-Shot, and Mona Lisa Touch, to enhance wellness and confidence. Our expert team provides safe, effective solutions for aesthetic and intimate health concerns."
        />
      </div>
      {/* <div className="block w-full xs:hidden py-10 mt-20"> */}
      <div className="xs:hidden w-full py-10 mt-20 relative h-screen flex flex-col justify-start items-start">
        {/* <div className="relative size-full" data-aos="fade-right"> */}
        <img
          data-aos="fade-right"
          src="/images/sexual-wellness/sexual-wellness-cover-mobile.png"
          alt="facial-service-image-mobile"
          className="absolute object-cover object-center h-screen inset-0"
        />
        {/* </div> */}

        <div className="grid space-y-[2.4rem] pr-[4rem] text-white md:w-[65rem] px-8 py-36">
          <h2
            className="font-rubik text-[32px] font-semibold leading-[3rem] w-full text-center"
            data-aos="fade-up"
          >
            Sexual Wellness
          </h2>
          <p
            className="font-work_sans font-medium leading-[3.5rem] tracking-[0.02em] opacity-80 text-sm text-center"
            data-aos="fade-left"
          >
            Lamb Medical offers specialized women's health treatments, including
            Elleebana Lash Lift, O-Shot, and Mona Lisa Touch, to enhance
            wellness and confidence. Our expert team provides safe, effective
            solutions for aesthetic and intimate health concerns.
          </p>
        </div>
      </div>
      <ServicesTab tabItems={sexualWellnessTabItems} />
      <PRPBreastRejuvenation />
      <OShot />
      <MonalisaTouch />
      <MiraDry />
    </Fragment>
  );
}
