import Wrapper from "@/app/components/Wrapper";
import { CheckIcon } from "@/app/icons";
import { conciergeItems } from "@/app/utils/data";

export default function ConciergeFamily() {
  return (
    <section className="bg-primary">
      <Wrapper className="grid place-content-center gap-[2rem] py-[4rem] text-center">
        <h2
          className="font-rubik text-[5.6rem] font-bold leading-[6.5rem] tracking-[0.02em] text-white"
          data-aos="fade-left"
        >
          Concierge Family <br /> Medicine Membership
        </h2>

        <p
          className="font-work_sans text-lg leading-[3rem] tracking-[0.01em] text-white"
          data-aos="fade-roght"
        >
          Our concierge practice, with limited spots and a growing waitlist,
          offers personalized <br /> care through a monthly or yearly membership
          fee covering all Family Medicine services.
        </p>

        <ul
          className="grid grid-cols-2 gap-x-[10rem] gap-y-[4rem] py-[2rem]"
          data-aos="fade-left"
        >
          {conciergeItems.map((item) => (
            <li className="flex items-center gap-[1rem]" key={item.id}>
              <i className="flex size-[3.2rem] shrink-0 items-center justify-center rounded-full bg-white">
                <CheckIcon />
              </i>
              <span className="font-rubik text-lg font-medium leading-[2rem] text-white">
                {item.title}
              </span>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  );
}
