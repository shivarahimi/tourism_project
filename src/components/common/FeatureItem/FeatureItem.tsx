"use client";

// base
import { FC } from "react";

// lib
import { motion } from "framer-motion";

// data
import { IFeatureItemDataType } from "#/src/core/data/Landing/Toolbar.data";
import { FullImage } from "../FullImage/FullImage";

interface FeatureItemProps {
  data: IFeatureItemDataType[]; // دریافت داده‌ها
  dataType?: "toolsBar" | "popularVideos";
}

const FeatureItem: FC<FeatureItemProps> = ({ data, dataType }) => {
  // var
  const toolsBar =
    dataType === "toolsBar"
      ? " flex flex-col xl:flex-row xl:items-center xl:justify-center"
      : " flex flex-col justify-center items-center ";

  const toolsBarTitle =
    dataType === "toolsBar" ? "text-right " : "text-center mt-4";

  const toolsBarDesc =
    dataType === "toolsBar"
      ? "  sm:w-[21rem] md:w-[20rem] lg:w-[26rem] xl:w-[18rem] "
      : " sm:w-[26rem] text-center md:w-[20rem] lg:w-[25rem] mt-4 ";

  const toolsBarDetailDesc =
    dataType === "toolsBar" ? "  mb-4 xl:mb-0 mr-4" : " mt-4 ";

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
            <FullImage src={item.image} alt="عکس" width={50} height={50} />
          </motion.div>
          <div className={`${toolsBarDetailDesc}`}>
            <h3
              className={`${toolsBarTitle} text-2xl font-extrabold  xl:pr-[0.8rem] mt-4 md:mt-0`}
            >
              {item.title}
            </h3>
            <p
              className={`${toolsBarDesc} custom-sm:w-[16rem] text-[1.12rem] text-customBlack text-justify leading-8 xl:p-4}`}
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
