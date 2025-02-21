import GetInTouch from "../components/GetInTouch";
import FAQ from "../components/Templates/FAQ";
import Questions from "../components/Templates/Questions";
import OurServices from "../components/Templates/OurServices";
import { home_faq } from "../data/faq";
import ServiceHeroSection from "./components/ServiceHero";

export default function Page() {
  return (
    <section className="overflow-hidden pt-5 sm:pt-16">
      <ServiceHeroSection />

      <OurServices />
      <Questions />
      <FAQ data={home_faq} />
      <GetInTouch />
    </section>
  );
}
