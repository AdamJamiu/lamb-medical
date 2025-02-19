import Wrapper from "@/app/components/Wrapper";
import Image from "next/image";

export default function page() {
  return (
    <section className=" py-[8rem] grid grid-cols-2 bg-primary items-center">
      <div className="h-[77.1rem] relative">
        <Image
          src="/pngs/energy-devices-image.png"
          alt="facial-services-image"
          className="absolute"
          fill
        />
      </div>
      <div className="text-white grid place-content-center mx-auto w-[57.4rem]">
        <h2 className="font-rubik text-10xl font-semibold leading-[7rem]">
          Facial Services
        </h2>
        <p className="text-md leading-[3.5rem] tracking-[2%] font-medium font-work_sans ">
          Facial services at Lamb Medical are designed to rejuvenate and enhance
          skin health through advanced treatments like Diamond Glow,
          dermaplaning, peels, and Aqua Gold. These customized treatments target
          concerns such as dullness, texture, and hydration, leaving the skin
          refreshed, radiant, and smooth.
        </p>
      </div>
    </section>
  );
}
