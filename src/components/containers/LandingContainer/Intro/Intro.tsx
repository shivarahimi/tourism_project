"use client";
// base
import { FC, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
// components
import { TabSearchBox } from "./TabSearchBox/TabSearchBox";
import { FullImage } from "#/src/components/common/FullImage/FullImage";
import { useInView, motion } from "framer-motion";

interface IPropType {}

const Intro: FC<IPropType> = () => {
  const ref = useRef(null); // برای رفرنس دادن به بخش مورد نظر
  const isInView = useInView(ref, { once: true }); // وقتی برای اولین بار وارد نمای کاربر شود
  const defaultImage1 = "/images/landing/Intro/banner_men.png";
  const defaultImage2 = "/images/landing/Intro/cloud2.png";
  const defaultImage3 = "/images/landing/Intro/plane1.png";
  const defaultImage4 = "/images/landing/Intro/glass1.png";
  const defaultImage5 = "/images/landing/Intro/ticket1.png";

  return (
    <section className="relative">
      <div className="flex flex-col-reverse items-center xl:flex-row xl:items-start md:justify-between text-white w-[90%] mt-24 mx-auto">
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
        <motion.div
          animate={isInView ? { y: ["0px", "-10px", "0px"] } : { y: "0px" }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <FullImage src={defaultImage1} alt="عکس" width={550} height={550} />

          <div className="hidden md:block">
            <FullImage
              src={defaultImage2}
              alt="عکس"
              width={250}
              height={250}
              className="absolute top-0 left-0"
            />
            <FullImage
              src={defaultImage4}
              alt="عکس"
              width={50}
              height={50}
              className="absolute top-28 left-[34rem]"
            />
            <FullImage
              src={defaultImage5}
              alt="عکس"
              width={100}
              height={100}
              className="absolute top-48 left-[35rem]"
            />
            <FullImage
              src={defaultImage3}
              alt="عکس"
              width={120}
              height={120}
              className="absolute bottom-72 left-[40rem]"
            />
            <FullImage
              src={defaultImage2}
              alt="عکس"
              width={250}
              height={250}
              className="absolute bottom-60 right-0"
            />
          </div>
        </motion.div>
      </div>
      <TabSearchBox />
    </section>
  );
};

export { Intro };
