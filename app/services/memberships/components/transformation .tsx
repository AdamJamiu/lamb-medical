import Wrapper from "@/app/components/Wrapper";
import BookNowButton from "../../components/book-now-button";
import Image from "next/image";

export default function Transformation() {
  return (
    <Wrapper className="grid w-full grid-cols-[58rem_1fr] gap-[8rem] pb-[8rem]">
      <div className="flex w-full flex-col gap-[2.4rem]">
        <h3
          className="font-rubik text-[4.8rem] font-semibold leading-[6.2rem] text-grey-200"
          data-aos="fade-right"
        >
          Take the first step toward your transformation today
        </h3>
        <p
          className="grid gap-8 font-work_sans text-md font-medium leading-[3.2rem] tracking-[0.02rem] text-grey-750 opacity-80"
          data-aos="fade-up"
        >
          Schedule your virtual consultation and discover the possibilities! For
          those considering membership, please send an email indicating your
          interest through our “Get in Touch” form below
        </p>
        <BookNowButton className="self-start" data-aos="fade-up">
          Get Touch
        </BookNowButton>
      </div>
      <figure
        className="relative flex size-full justify-end"
        data-aos="fade-left"
      >
        <div className="relative flex h-full w-[45rem]" data-aos="fade-left">
          <Image
            src="/images/weight-loss/visual-consultation-2.png"
            alt=""
            fill
            className=""
          />
        </div>
      </figure>
    </Wrapper>
  );
}
