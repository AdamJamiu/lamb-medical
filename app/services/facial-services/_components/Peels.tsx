import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";
import ServicesIntro from "../../components/services-intro";

export default function Peels() {
  return (
    <Wrapper id="peels" className="grid gap-[4rem]">
      <ServicesIntro
        title="Peels - Chemical Peels"
        description="Chemical peels are a fast and effective way to exfoliate dry or damaged skin allowing new, smoother, healthier skin to surface. Your skin will gain a healthier and younger appearance. Peels help to minimize fine wrinkles, improve discoloration and age spots, and improve the overall texture of your skin. We understand that sometimes decision making is complicated, and we will help you choose the best option for your skin needs."
      />
      <figure
        className="relative h-[62.3rem] overflow-hidden rounded"
        data-aos="zoom-in"
      >
        <Image
          src="/images/facial-services/chemical-peel.png"
          alt=""
          role="presentation"
          fill
          className="object-cover"
        />
      </figure>

      <p className="text-grey-750 font-work_sans text-lg font-medium leading-[3.6rem] tracking-[0.02rem] opacity-80 py-28">
        Benefits of dermaplaning include increasing your skin’s ability to
        absorb products and creating a healthier more radiant appearance. Also,
        fine lines and wrinkles will be diminished. Dermaplaning is a great way
        to prep your skin before a chemical peel.
      </p>
      <p className="text-grey-750 font-work_sans text-lg font-medium leading-[3.6rem] tracking-[0.02rem] opacity-80 pb-28">
        Dermaplaning will NOT cause hair to grow back darker or thicker nor will
        it cause breakouts. Additionally, dermaplaning is not painful. The
        treatment is performed with a specialized razor and cannot be done at
        home. Lamb Medical & Aesthetics now offers the DiamondGlow™ Treatment.
        Unlike traditional wet facial treatments, which rely on chemical
        exfoliation to treat skin at surface level, DiamondGlow’s™ patented
        recessed diamond tip wand delivers a next-level resurfacing treatment
        that deeply cleans and rejuvenates the skin. Diamond Glow Facial focuses
        on rejuvenating the face and neck. Diamond Glow Body applies the same
        great treatment to the body for overall glowing results. Finally,
        Diamond Glow KP spot treats that stubborn keratosis pilaris or “chicken
        skin” on the backs of arms or tops of thighs. Get ready to glow! 
      </p>
    </Wrapper>
  );
}
