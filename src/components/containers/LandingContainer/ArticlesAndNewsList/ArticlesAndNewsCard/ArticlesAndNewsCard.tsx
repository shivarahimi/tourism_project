// components
import { FadeInUp } from "#/src/components/common/Animation/FadeInUp/FadeInUp";
import { FullButton } from "#/src/components/common/FullButton/FullButton";
import { FullImage } from "#/src/components/common/FullImage/FullImage";

// data
import { ArticlesNewsData } from "#/src/core/data/ArticlesNews/ArticlesNews.data";

// icon
import { FaRegComment, FaRegUser } from "react-icons/fa";

const ArticlesAndNewsCard = () => {
  return (
    <>
      {ArticlesNewsData.slice(0, 2).map((item, index) => (
        <>
          <FadeInUp duration={0.5}>
            <div
              key={index}
              className={` flex flex-col  items-center justify-around xl:justify-between xl:max-w-[1250px] mx-auto mt-8 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse "
              }`}
            >
              {/* hover  =تصویر */}
              <div className="rounded-xl overflow-hidden">
                <FullImage
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={436}
                  quality={100}
                  className="rounded-xl transform transition-transform duration-300 ease-in-out hover:scale-110"
                  objectFit="cover"
                />
              </div>

              <div className=" sm:w-[600px] lg:w-[480px] xl:w-[575px]">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4  lg:gap-8 mt-8 xl:mt-0 ">
                  <p className="flex justify-center items-center w-[80px] h-[80px] lg:w-[112px] lg:h-[80px] xl:w-[120px] xl:h-[100px] bg-gt-gradient-1 text-white rounded-[50%]">
                    {item.date}
                  </p>
                  <h2 className="text-[#262524] text-[1.5rem] sm:text-[2.1rem] lg:text-[2rem] xl:text-[2.5rem] font-extrabold">
                    {item.title}
                  </h2>
                </div>

                <div className="flex justify-evenly !w-[245px] rounded-[2.5rem] py-[0.3rem] px-[0.6rem] bg-[#e6f0ff] mt-4">
                  <div className="flex items-center">
                    <FaRegUser />
                    <p className="text-[#262524] font-extrabold text-[0.9rem] my-[0.2rem] mx-[0.5rem]">
                      {item.author}
                    </p>
                  </div>

                  <div className="flex items-center">
                    <FaRegComment />
                    <p className="text-[#262524] font-extrabold text-[0.9rem] my-[0.2rem] mx-[0.5rem]">
                      {item.view}
                    </p>
                    <p>دیدگاه</p>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-[#444444] text-[1.25rem] font-medium  pt-[0.75rem] leading-8">
                    {item.shortContent}
                  </p>
                </div>

                <div>
                  <FullButton text="ادامه مطالب" className="mt-8" />
                </div>
              </div>
            </div>
          </FadeInUp>

          {index !== ArticlesNewsData.length - 1 && (
            <div className="border-b border-solid border-[#ededed] w-[95%] mx-auto mb-[60px] pb-[60px] "></div>
          )}
        </>
      ))}
    </>
  );
};

export { ArticlesAndNewsCard };
