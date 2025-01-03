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
  const defaultImage = "/images/landing/Intro/banner_men.png";
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
          // className="z-20"
          animate={isInView ? { y: ["0px", "-10px", "0px"] } : { y: "0px" }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <FullImage src={defaultImage} alt="عکس" width={550} height={550} />
        </motion.div>
      </div>
      <TabSearchBox />
    </section>
  );
};

export { Intro };
