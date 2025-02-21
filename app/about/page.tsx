import GetInTouch from "../components/GetInTouch";
import FAQ from "../components/Templates/FAQ";
import Questions from "../components/Templates/Questions";
import MeetTheTeam from "../components/Templates/MeetTheTeam";
// import OurServices from "../components/Templates/OurServices";
import { home_faq } from "../data/faq";
import AboutSection from "./_components/AboutHero";

export default function Page() {
  return (
    <section className="overflow-hidden pt-16">
      <AboutSection />

      {/* <OurServices /> */}
      <MeetTheTeam />
      <Questions />
      <FAQ data={home_faq} />
      <GetInTouch />
    </section>
  );
}
