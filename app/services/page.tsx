import Image from "next/image";
import GetInTouch from "../components/GetInTouch";
import HeroSection from "../components/HeroSection";
import Wrapper from "../components/Wrapper";
import FAQ from "../components/Templates/FAQ";
import Questions from "../components/Templates/Questions";
import MeetTheTeam from "../components/Templates/MeetTheTeam";
import OurServices from "../components/Templates/OurServices";
import { home_faq } from "../data/faq";
import ExperienceLamb from "../components/ExperienceLamb";
import WallOfLove from "../components/WallOfLove";
import ServiceHeroSection from "./components/ServiceHero";

export default function Page() {
  return (
    <section className="overflow-hidden pt-16">
      <ServiceHeroSection />

      <OurServices />
      <Questions />
      <FAQ data={home_faq} />
      <GetInTouch />
    </section>
  );
}
