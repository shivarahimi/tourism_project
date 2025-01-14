"use client";
// base
import { FC } from "react";
// lib
import { Typewriter } from "react-simple-typewriter";
// components
import { Mover } from "#/src/components/common/Animation/Mover/Mover";
import { RightToLeftImg } from "#/src/components/common/Animation/RightToLeftImg/RightToLeftImg";
import { FullImage } from "#/src/components/common/FullImage/FullImage";
import { TabSearchBox } from "./TabSearchBox/TabSearchBox";

interface IPropType {}

const Intro: FC<IPropType> = () => {
  const defaultImage1 = "/images/landing/Intro/banner_men.png";
  const defaultImage2 = "/images/landing/Intro/cloud2.png";
  const defaultImage3 = "/images/landing/Intro/plane1.png";
  const defaultImage4 = "/images/landing/Intro/glass1.png";
  const defaultImage5 = "/images/landing/Intro/ticket1.png";

  return (
    <section className="xl:relative z-20">
      <div className="flex flex-col-reverse items-center xl:flex-row xl:items-start md:justify-between text-white w-[90%] xl:mt-24 mx-auto">
        <div className="flex flex-col items-center justify-start z-20">
          <div className="text-center max-w-2xl p-5">
            <div className="text-4xl md:text-7xl">کشف</div>
            <div className="flex items-center justify-center mb-3">
              <h1 className="text-4xl md:text-7xl font-black">
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
              <h1 className="text-4xl md:text-7xl font-black">بعدی</h1>
            </div>

            <p className="text-lg md:text-xl">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است
            </p>
          </div>
          <TabSearchBox />
        </div>

        <Mover duration={3} animName="easeInOut">
          <FullImage src={defaultImage1} alt="مرد" width={550} height={550} />
        </Mover>

        <RightToLeftImg
          className="absolute top-0 left-0 -z-10 hidden lg:block"
          duration={45}
        >
          <FullImage src={defaultImage2} alt="ابر" width={250} height={250} />
        </RightToLeftImg>

        <FullImage
          src={defaultImage4}
          alt="عینک"
          width={50}
          height={50}
          className="absolute top-28 left-[34rem] hidden xl:block"
        />
        <FullImage
          src={defaultImage5}
          alt="تیکت"
          width={100}
          height={100}
          className="absolute top-48 left-[35rem] hidden xl:block"
        />
        <FullImage
          src={defaultImage3}
          alt="عکس"
          width={120}
          height={120}
          className="absolute bottom-72 left-[40rem] hidden xl:block"
        />

        <RightToLeftImg
          className="absolute bottom-60 right-10 hidden xl:block"
          duration={45}
        >
          <FullImage src={defaultImage2} alt="ابر" width={250} height={250} />
        </RightToLeftImg>
      </div>
    </section>
  );
};

export { Intro };
