import { Fragment } from "react";
import ServicesHero from "../components/services-hero";
import ServicesTab from "../components/services-tab";
import Botox from "./components/botox";
import DermalFillers from "./components/dermal-fillers";
import Sculptra from "./components/sculptra";
import PRPRejuvenation from "./components/prp-rejuvenation";
import Kybella from "./components/kybella";

const injectableTreatmentsTabItems = [
  { href: "#botox", label: "Injectables (Botox/Dysport)" },
  { href: "#dermal-fillers", label: "Dermal Fillers" },
  { href: "#sculptra", label: "Sculptra" },
  { href: "#prp-rejuvenation", label: "PRP Rejuvenation" },
  { href: "#kybella", label: "Kybella" },
];

export default function InjectableTreatments() {
  return (
    <Fragment>
      <div className="xs:block hidden">
        <ServicesHero
          image="injectable-treatments/injectable-treatments-image.png"
          title="Injectable Treatments"
          description="Lamb Medical offers a range of injectable treatments, including Botox, Dysport, Daxxify, Sculptra, and PRP, to smooth wrinkles, restore volume, and rejuvenate skin. Our expert team provides personalized, non-surgical solutions for a refreshed and youthful appearance."
        />
      </div>
      <div className="block w-full xs:hidden py-10 mt-20">
        <div className="relative size-full" data-aos="fade-right">
          <img
            src="/images/injectable-treatments/injectable-treatments-image-mobile.png"
            alt="facial-service-image-mobile"
            className="absolute object-cover object-center"
          />
        </div>

        <div className="grid space-y-[2.4rem] pr-[4rem] text-white md:w-[65rem] px-8 py-10 mt-10">
          <h2
            className="font-rubik text-[32px] font-semibold leading-[3rem] w-full text-center"
            data-aos="fade-up"
          >
            Injectable Treatments
          </h2>
          <p
            className="font-work_sans font-medium leading-[3.5rem] tracking-[0.02em] opacity-80 text-sm text-center"
            data-aos="fade-left"
          >
            Lamb Medical offers a range of injectable treatments, including
            Botox, Dysport, Daxxify, Sculptra, and PRP, to smooth wrinkles,
            restore volume, and rejuvenate skin. Our expert team provides
            personalized, non-surgical solutions for a refreshed and youthful
            appearance..
          </p>
        </div>
      </div>
      <ServicesTab tabItems={injectableTreatmentsTabItems} />
      <Botox />
      <DermalFillers />
      <Sculptra />
      <PRPRejuvenation />
      <Kybella />
    </Fragment>
  );
}
