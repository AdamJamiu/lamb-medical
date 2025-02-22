import BookNowButton from "./book-now-button";

interface ServicesIntroProps {
  title: string;
  description: string | React.ReactNode;
}

export default function ServicesIntro({
  title,
  description,
}: ServicesIntroProps) {
  return (
    <section className="space-y-[2rem] pt-[2rem]" data-aos="fade-left">
      <h3 className="font-rubik text-[5.8rem] font-semibold leading-[6rem] text-grey-200">
        {title}
      </h3>

      <p className="text-grey-750 grid gap-8 font-work_sans text-lg font-medium leading-[3.6rem] tracking-[0.02rem] opacity-80">
        {description}
      </p>
      <BookNowButton>Book Now</BookNowButton>
    </section>
  );
}
