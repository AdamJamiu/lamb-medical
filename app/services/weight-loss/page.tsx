import { Fragment } from "react";
import ServicesHero from "../components/services-hero";
import ServicesTab from "../components/services-tab";
import BeWellProgram from "./components/well-program";
import BeWellProgramTeam from "./components/well-program-team";
import OurServices from "./components/our-services";
import ServiceImageContentLayout from "../components/service-image-content-layout";
import WhyChooseUs from "./components/why-choose-us";
import Transformation from "./components/transformation ";
import BookNowButton from "../components/book-now-button";
import ConciergeFamily from "../components/concierge-family";

const weightLossTabItems = [
  { href: "#well-program", label: "Be Well Program" },
];

export default function WeightLoss() {
  return (
    <Fragment>
      <ServicesHero
        image="weight-loss/weight-loss-cover.png"
        title="Wellness & Weight Loss"
        description="The Wellness & Weight Loss programs at Lamb Medical focus on personalized plans to help patients achieve sustainable health and fitness goals. Through expert guidance, advanced treatments, and lifestyle support, these programs promote overall well-being, increased energy, and long-term health."
      />
      <ServicesTab tabItems={weightLossTabItems} />
      <BeWellProgram />
      <BeWellProgramTeam />
      <OurServices />
      <ServiceImageContentLayout
        image="weight-loss/visual-consultation.png"
        title="Virtual consultations"
      >
        <p className="grid gap-8 font-work_sans text-md font-medium leading-[3.2rem] tracking-[0.02rem] text-grey-750 opacity-80">
          At Lamb Medical, we believe that true wellness begins from the inside
          out. That’s why we’re excited to offer virtual consultations tailored
          to your personal wellness journey. Our program includes the latest
          innovations in metabolic health and body transformation, such as
          cutting-edge weight loss injections like Semaglutide and Tirzepatide.
          With personalized guidance and advanced treatments, we’re here to help
          you achieve your health goals, from weight management to overall
          well-being, all from the comfort of your home.
        </p>
      </ServiceImageContentLayout>

      <WhyChooseUs />
      <Transformation />
      <ConciergeFamily />
      <ServiceImageContentLayout
        image="weight-loss/visual-consultaion-3.png"
        title="Electronic Communication"
      >
        <p className="grid gap-8 font-work_sans text-md font-medium leading-[3.2rem] tracking-[0.02rem] text-grey-750 opacity-80">
          Lamb Medical uses Elation Passport and state-of-the-art electronic
          medical record that provides a patient portal and provides email
          communication for test results, routine questions, medication refills,
          and scheduling. For more information about these communication tools,
          please click the button below
        </p>
        <BookNowButton className="self-start">Learn more</BookNowButton>
      </ServiceImageContentLayout>
    </Fragment>
  );
}
