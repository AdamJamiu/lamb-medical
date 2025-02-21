import Image from "next/image";

const BuilidngTrust = () => {
  return (
    <section className="w-full py-24 lg:py-32 xl:pt-44 xl:pb-44 h-full">
      <div className="w-full">
        <div className="w-full p-8 sm:p-10 md:px-14 py-14 max-w-[1500px] mx-auto">
          <h1
            data-aos="fade-up"
            className="text-[#12121299] font-rubik font-semibold text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight"
          >
            Building trust through transparency and communication
          </h1>
          <h2
            data-aos="fade-up"
            className="text-[#12121299] font-work_sans md:text-lg leading-loose lg:w-[80%] mt-5"
          >
            From preventive care and wellness programs to advanced treatments
            and personalized health plans, our offerings are designed to empower
            you to live your best life.
          </h2>
        </div>
        <div
          data-aos="fade-up"
          className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5"
        >
          <Image
            src="/32.png"
            width={600}
            height={400}
            className="w-full col-span-1 h-[300px] md:h-[400px]"
            alt="empowering"
          />
        </div>
      </div>
    </section>
  );
};

export default BuilidngTrust;
