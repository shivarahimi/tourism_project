"use client";
// base
import { FC } from "react";
import { Typewriter } from "react-simple-typewriter";
// components
import { TabSearchBox } from "./TabSearchBox/TabSearchBox";
import { FullImage } from "#/src/components/common/FullImage/FullImage";

interface IPropType {}

const Intro: FC<IPropType> = () => {
  const defaultImage = "/images/landing/Intro/banner_men.png";
  return (
    <section className="relative bg-black">
      <div className="flex flex-col-reverse md:flex-row items-center md:justify-between text-white w-[90%] mx-auto">
        <div className="text-center max-w-2xl p-5">
          <div className="text-7xl">کشف</div>
          <div className="flex items-center justify-center">
            <h1 className="text-7xl font-black mb-3">
              <Typewriter
                words={["ماجرای", "مقصد", "تور"]}
                loop={true} // برای نمایش مداوم، این مقدار را true قرار دهید
                cursor
                cursorStyle="|"
                typeSpeed={130}
                deleteSpeed={80}
                delaySpeed={1300} // فاصله زمانی بین متون
              />
            </h1>
            <h1 className="text-7xl font-black mb-3">بعدی</h1>
          </div>

          <p className="text-xl">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>
        </div>
        <div>
          <FullImage src={defaultImage} alt="عکس" width={600} height={600} />
        </div>
      </div>
      {/* <TabSearchBox /> */}
    </section>
  );
};

export { Intro };
