"use client";

// base
import { FC } from "react";

// lib
import { motion } from "framer-motion";

// data
import {
  IToolsBarListData,
  ToolsBarListData,
} from "#/src/core/data/Landing/Toolbar.data";

import { FullImage } from "#/src/components/common/FullImage/FullImage";

const ToolsBar: FC = () => {
  // data
  const data = ToolsBarListData();
  return (
    <section
      className="bg-customPink p-4  py-[9rem]"
      style={{
        backgroundImage: "url('/images/landing/ToolsBar/bottom-shape.png')",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="grid md:grid-cols-2 xl:grid-cols-3 ">
        {data.map((item: IToolsBarListData, index: number) => (
          <div
            key={index}
            className="flex flex-col xl:flex-row xl:items-center xl:justify-center"
          >
            <motion.div
              className="flex justify-center items-center"
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
              <div className="flex justify-center items-center w-[100px] h-[100px] bg-white rounded-[4.5rem] mb-4 xl:mb-0 xl:mr-4">
                <FullImage src={item.image} alt="عکس" width={50} height={50} />
              </div>
            </motion.div>

            <div className="mb-4 xl:mb-0">
              <h3 className="text-2xl font-extrabold text-right xl:pr-[0.8rem] mt-4 md:mt-0">
                {item.title}
              </h3>
              <p className="custom-sm:w-[16rem] sm:w-[21rem] md:w-[20rem] lg:w-[26rem] xl:w-[18rem] text-[1.12rem] text-customBlack text-justify leading-8 xl:p-4">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { ToolsBar };
