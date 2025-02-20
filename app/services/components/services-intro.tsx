import BookNowButton from "./book-now-button";

interface ServicesIntroProps {
  title: string;
  description: string;
}

export default function ServicesIntro({
  title,
  description,
}: ServicesIntroProps) {
  return (
    <section
      className="space-y-[2.4rem] px-[1.3rem] pt-[2rem]"
      data-aos="fade-left"
    >
      <h3 className="font-rubik text-[6.2rem] font-semibold leading-[9rem] text-grey-200">
        {title}
      </h3>

      <p className="text-grey-800 font-work_sans text-[2.32rem] font-medium leading-[4.5rem] tracking-[0.02rem] opacity-80">
        {description}
      </p>
      <BookNowButton>Book Now</BookNowButton>
    </section>
  );
}
