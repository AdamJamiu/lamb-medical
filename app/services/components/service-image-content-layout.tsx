import Image from "next/image";
import Wrapper from "@/app/components/Wrapper";
import { cn } from "@/app/utils";

interface ServiceImageContentLayoutProps {
  image: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function ServiceImageContentLayout({
  image,
  title,
  children,
  className,
}: ServiceImageContentLayoutProps) {
  return (
    <Wrapper
      className={cn(
        "grid grid-cols-[58rem_1fr] grid-rows-[38rem] items-center gap-[13rem] py-[8rem]",
        className,
      )}
    >
      <div className="relative h-full" data-aos="fade-right">
        <Image src={`/images/${image}`} alt={title} fill />
      </div>
      <figcaption className="flex flex-col gap-[2.4rem]" data-aos="fade-left">
        <h3 className="font-rubik text-[4.8rem] font-semibold leading-[4rem] text-grey-200">
          {title}
        </h3>
        {children}
      </figcaption>
    </Wrapper>
  );
}
