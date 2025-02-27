import { Fragment } from "react";
import ServicesHero from "../components/services-hero";
import ServicesTab from "../components/services-tab";
import EmsculptNeo from "./components/emsculpt-neo";
import SofwaveBody from "./components/sofwave-body";

const bodyTreatmentsTabItems = [
  { href: "#emsculpt-neo", label: "Emsculpt Neo" },
  { href: "#sofwave-body", label: "Sofwave Body" },
];

export default function BodyTreatments() {
  return (
    <Fragment>
      <div className="xs:block hidden">
        <ServicesHero
          image="body-treatments/body-treatments-cover.png"
          title="Body Treatments"
          description="Lamb Medical offers advanced body contouring and muscle tightening treatments like Sofwave Body and Kybella to sculpt and define targeted areas. These non-invasive solutions help reduce stubborn fat, improve skin elasticity, and enhance muscle tone for a firmer, more contoured appearance."
        />
      </div>
      <div className="block w-full xs:hidden py-10 mt-20">
        <div className="relative size-full" data-aos="fade-right">
          <img
            src="/images/body-treatments/body-treatments-cover-mobile.png"
            alt="facial-service-image-mobile"
            className="absolute object-cover object-center"
          />
        </div>

        <div className="grid space-y-[2.4rem] pr-[4rem] text-white md:w-[65rem] px-8 py-10 my-10">
          <h2
            className="font-rubik text-[32px] font-semibold leading-[3rem] w-full text-center"
            data-aos="fade-up"
          >
            Body Treatments
          </h2>
          <p
            className="font-work_sans font-medium leading-[3.5rem] tracking-[0.02em] opacity-80 text-sm text-center"
            data-aos="fade-left"
          >
            Lamb Medical offers advanced body contouring and muscle tightening
            treatments like Sofwave Body and Kybella to sculpt and define
            targeted areas. These non-invasive solutions help reduce stubborn
            fat, improve skin elasticity, and enhance muscle tone for a firmer,
            more contoured appearance.
          </p>
        </div>
      </div>
      <ServicesTab tabItems={bodyTreatmentsTabItems} />
      <EmsculptNeo />
      <SofwaveBody />
    </Fragment>
  );
}
