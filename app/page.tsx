import Image from "next/image";
import GetInTouch from "./components/GetInTouch";
import HeroSection from "./components/HeroSection";
import empowering from "/2.png";
import Wrapper from "./components/Wrapper";
import FAQ from "./components/Templates/FAQ";
import Questions from "./components/Templates/Questions";
import MeetTheTeam from "./components/Templates/MeetTheTeam";
import OurServices from "./components/Templates/OurServices";
import { home_faq } from "./data/faq";

export default function Home() {
  return (
    <section className="overflow-hidden pt-16">
      <HeroSection />

      {/* Empowering your look */}
      <Wrapper className="w-full p-5 sm:p-10 md:p-14">
        <div className="w-full max-w-[1500px] grid lg:grid-cols-2 gap-10 lg:gap-20 xl:gap-32 2xl:gap-48">
          <div className="w-full my-auto">
            <h1
              data-aos="fade-up"
              className="text-[#12121299] md:block hidden font-rubik font-semibold text-6xl leading-tight"
            >
              Empowering Your Journey To Look And Feel Your Best
            </h1>
            <h1
              data-aos="fade-up"
              className="md:hidden block text-[#12121299] font-rubik font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-loose"
            >
              Empowering Your Journey To Look And Feel Your Best
            </h1>
            <p
              data-aos="fade-up"
              className="text-[#12121299] mt-6 text-base md:text-lg lg:text-xl font-work_sans"
            >
              Our commitment is to provide a highly personalized healthcare
              experience. From routine checkups to complex medical needs, Lamb
              Medicals offers services tailored to your unique requirements. Our
              expert team of dedicated professionals takes the time to
              understand you, delivering exceptional care with compassion and
              precision.
            </p>
          </div>
          <div data-aos="fade-up">
            <Image
              src="/2.png"
              width={1000}
              height={1000}
              className="w-full h-full"
              alt="empowering"
            />
          </div>
        </div>
      </Wrapper>

      <OurServices />
      <MeetTheTeam />
      <Questions />
      <FAQ data={home_faq} />
      <GetInTouch />
    </section>
  );
}
