const Hero = () => {
  return (
    <section className="bg-primary relative flex h-full min-h-screen">
      <img
        src="/blog-pattern.png"
        alt="pattern"
        className="absolute -right-[400px] top-0 h-screen z-0"
      />
      <div className="relative z-10 flex w-full md:w-[800px] flex-col items-center justify-center md:items-start gap-4 md:pl-28 lg:pl-40 lg:pt-36 xl:pl-64 pt-0 text-center sm:mt-8 md:mt-0 md:py-10 md:pt-0 lg:gap-7">
        <h1
          data-aos="fade-up"
          className="w-[80%] text-center md:text-left text-4xl font-semibold text-white sm:text-[35px] md:text-[40px] lg:text-[48px]"
        >
          Stay updated with Lamb Medical
        </h1>
        <p
          data-aos="fade-up"
          className="hidden w-full text-center md:text-left leading-relaxed text-white lg:block sm:text-lg lg:text-[18px]"
        >
          Stay informed and empowered with the latest tips, trends, and expert
          advice in health and wellness.
        </p>
        <p
          data-aos="fade-up"
          className="block leading-loose text-white lg:hidden sm:text-lg"
        >
          Stay informed and empowered with the latest tips, trends, and expert
          advice in health and wellness.
        </p>
      </div>
    </section>
  );
};

export default Hero;
