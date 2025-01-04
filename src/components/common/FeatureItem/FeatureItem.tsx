"use client";

// base
import { FC } from "react";

// lib
import { motion } from "framer-motion";

// componnets
import { FullImage } from "../FullImage/FullImage";

// data
import { IFeatureItemDataType } from "#/src/core/data/Landing/Toolbar.data";
// enum
import { dataTypePageEnum } from "#/src/core/enums/dataTypePage.enum";

interface FeatureItemProps {
  data: IFeatureItemDataType[]; // دریافت داده‌ها
  dataType?: "toolsBar" | "popularVideos";
}

const FeatureItem: FC<FeatureItemProps> = ({ data, dataType }) => {
  // var
  const toolsBar =
    dataType === dataTypePageEnum.toolsBar
      ? " flex flex-col xl:flex-row xl:items-center xl:justify-center"
      : " flex flex-col justify-center items-center pt-16 md:pt-0 ";

  const toolsBarTitle =
    dataType === dataTypePageEnum.toolsBar ? "text-right " : "text-center mt-4";

  const toolsBarDesc =
    dataType === dataTypePageEnum.toolsBar
      ? " md:px-[0.6rem]  xl:px-[0.6rem]  lg:pt-[0.6rem] xl:w-[18rem] leading-6  text-justify "
      : "px-4 md:px-[0.6rem] lg:px-16 xl:px-[0.6rem] leading-8 text-center";

  const toolsBarDetailDesc =
    dataType === "toolsBar"
      ? "  mb-4 xl:mb-0 mr-0 xl:mr-4 px-0 xl:px-[0.6rem]"
      : " ";

  return (
    <>
      {data.map((item, index) => (
        <div key={index} className={`${toolsBar}`}>
          <motion.div
            className="flex justify-center items-center w-[100px] h-[100px] bg-white rounded-[4.5rem] mb-4 xl:mb-0 xl:mr-4"
            initial={{ y: 0 }}
            whileHover={{
              y: ["0px", "-20px", "0px", "-10px", "0px"],
              scale: [1, 1.1, 1, 1.05, 1],
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <FullImage src={item.image} alt="عکس" width={70} height={70} />
          </motion.div>
          <div className={`${toolsBarDetailDesc} xl:pt-8`}>
            <h3
              className={`${toolsBarTitle} text-2xl font-extrabold   mt-4 md:mt-0 xl:pr-[0.8rem]`}
            >
              {item.title}
            </h3>
            <p
              className={`${toolsBarDesc}  text-base text-customBlack  xl:p-4}`}
            >
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeatureItem;

// ***
// sm:w-[26rem] text-center md:w-[20rem] lg:w-[25rem] mt-4

// sm:w-[21rem] md:w-[20rem] lg:w-[26rem] xl:w-[18rem]
// custom-sm:w-[15rem] sm:w-[21rem]
