import { blogs } from "@/app/data/blog";

const Blog = () => {
  return (
    <div className="w-full py-48 px-7 md:px-16 lg:px-36 xl:px-48 h-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-5 lg:gap-10 gap-y-10 lg:gap-y-14 w-full">
        {blogs.map((item, index) => (
          <div
            key={index}
            className="w-full flex flex-col items-start justify-between"
          >
            <div>
              <div className="w-full h-[185px] rounded-sm">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-full"
                />
              </div>
              <p className="text-grey-750 font-medium text-base md:text-lg lg:text-[20px] mt-4 font-rubik">
                {item.title}
              </p>

              <p className="text-grey-750 font-medium text-xs md:text-sm lg:text-[14px] mt-4 font-work_sans">
                {item.date}
              </p>

              <p className="text-grey-750 font-[400] text-xs md:text-sm lg:text-[14px] mt-5 font-work_sans">
                {item.content}
              </p>
            </div>

            <button className="rounded-md bg-primary px-4 py-2.5 text-white font-work_sans mt-7 text-xs md:text-base ease transition-all duration-300 hover:opacity-65">
              Read more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
