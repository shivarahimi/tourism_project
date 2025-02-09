"use client";

// base
import { FC, useState, useEffect, useRef } from "react";

// lib
import { motion } from "framer-motion";

// components
import { FullImage } from "#/src/components/common/FullImage/FullImage";
import { FullButton } from "#/src/components/common/Form/FullButton/FullButton";

// anim
import { RightToLeft } from "#/src/components/common/Animation/RightToLeft/RightToLeft";
import { Mover } from "#/src/components/common/Animation/Mover/Mover";

// image
import girlsImage from "$/images/landing/Discover/grils.png";
import camera from "$/images/landing/Discover/camera.png";
import cloud from "$/images/landing/Discover/cloud.png";
import hat from "$/images/landing/Discover/hat.png";
import map from "$/images/landing/Discover/map.png";

const Discover: FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // useEffect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="grid grid-cols-1 xl:grid xl:grid-cols-[43%_57%] 2xl:!max-w-[1400px] 2xl:!mx-auto mb-[6rem] "
    >
      <div className="relative">
        <div className="w-full h-full flex justify-center items-center">
          <Mover duration={3} animName="easeInOut" className="z-20">
            <FullImage
              src={girlsImage.src}
              alt="عکس"
              width={550}
              height={550}
              className="z-20 w-[550px] md:w-[550px] 2xl:w-[600px]"
            />
          </Mover>
        </div>

        {/* کلاه */}
        <motion.span
          className="absolute top-[120px] right-[90px] lg:right-[40px] hidden md:block"
          animate={
            isInView
              ? {
                  x: isHovered ? ["0px", "5px", "-5px", "0px"] : ["0px"],
                  y: isHovered ? ["0px", "-3px", "0px"] : ["0px"],
                }
              : { x: "0px", y: "0px" }
          }
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <FullImage
            src={hat.src}
            alt="کلاه"
            width={120}
            height={120}
            className="] md:w-[140px] lg:w-[120px] "
          />
        </motion.span>

        {/* ابر */}
        <motion.span
          className="absolute top-[167px] left-[75px] xl:left-0 z-10 hidden md:block"
          animate={
            isInView
              ? {
                  x: isHovered ? ["0px", "5px", "-5px", "0px"] : ["0px"],
                  y: isHovered ? ["0px", "-3px", "0px"] : ["0px"],
                }
              : { x: "0px", y: "0px" }
          }
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <FullImage
            src={cloud.src}
            alt="ابر"
            width={140}
            height={140}
            className=" md:w-[140px] lg:w-[140px] "
          />
        </motion.span>

        {/* دوربین */}
        <motion.span
          className="absolute bottom-[164px] !left-[13px] xl:!left-[-80px] z-10 hidden md:block"
          animate={
            isInView
              ? {
                  x: isHovered ? ["0px", "5px", "-5px", "0px"] : ["0px"],
                  y: isHovered ? ["0px", "-3px", "0px"] : ["0px"],
                }
              : { x: "0px", y: "0px" }
          }
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <FullImage
            src={camera.src}
            alt="دوربین"
            width={100}
            height={100}
            className=" md:w-[110px] lg:w-[100px] "
          />
        </motion.span>

        {/* نقشه */}
        <motion.span
          className="absolute bottom-[6rem]  right-[4rem] xl:right-[1rem] z-10 hidden md:block"
          animate={
            isInView
              ? {
                  x: isHovered ? ["0px", "5px", "-5px", "0px"] : ["0px"],
                  y: isHovered ? ["0px", "-3px", "0px"] : ["0px"],
                }
              : { x: "0px", y: "0px" }
          }
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <FullImage
            src={map.src}
            alt="نقشه"
            width={70}
            height={70}
            className=" md:w-[110px] lg:w-[70px] "
          />
        </motion.span>
      </div>

      {/*ستون دوم */}
      <div className="flex flex-col items-center justify-center">
        <RightToLeft
          duration={1}
          delay={0.2}
          animName="easeOut"
          className=" w-[95%] xl:w-[80%]"
        >
          <h1 className="text-customBlack text-[1.5rem] lg:text-[1.87rem]">
            کشف کردن
          </h1>
        </RightToLeft>

        <h1 className=" w-[95%] text-customBlack text-[2rem] md:text-[3.12rem] lg:text-[3.65rem] font-black block md:hidden  ">
          <div>زندگی کوتاه است و جهان گسترده است !</div>
        </h1>

        <h1 className=" w-[95%] xl:w-[80%] text-customBlack text-[2rem] md:text-[3.12rem] lg:text-[3.65rem] font-black hidden md:block">
          <div>زندگی کوتاه است و جهان </div>
          <div>گسترده است!</div>
        </h1>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-customBlack text-[1.12rem] leading-[1.8rem] w-[95%] xl:w-[80%] text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
          </p>
        </motion.div>

        <FullButton text="رزرو" className="w-[80%] mt-8" />
      </div>
    </section>
  );
};

export { Discover };
