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

export default function Page() {
  return (
    <section className="overflow-hidden pt-16">
      <HeroSection />

      {/* Empowering your look */}
      <Wrapper className="w-full p-5 sm:p-10 md:p-14">
        <div className="grid w-full max-w-[1500px] gap-10 lg:grid-cols-2 lg:gap-20 xl:gap-32 2xl:gap-48">
          <div className="my-auto w-full">
            <h1
              data-aos="fade-up"
              className="hidden font-rubik text-6xl font-semibold leading-tight text-[#12121299] md:block"
            >
              Empowering Your Journey To Look And Feel Your Best
            </h1>
            <h1
              data-aos="fade-up"
              className="block font-rubik text-xl font-semibold leading-loose text-[#12121299] sm:text-2xl md:hidden md:text-3xl lg:text-4xl"
            >
              Empowering Your Journey To Look And Feel Your Best
            </h1>
            <p
              data-aos="fade-up"
              className="mt-6 font-work_sans text-base text-[#12121299] md:text-lg lg:text-xl"
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
              className="h-full w-full"
              alt="empowering"
            />
          </div>
        </div>
      </Wrapper>

      {/* Experience the lamb look */}
      <ExperienceLamb />

      <OurServices />
      <MeetTheTeam />
      <WallOfLove />
      <Questions />
      <FAQ data={home_faq} />
      <GetInTouch />
    </section>
  );
}
