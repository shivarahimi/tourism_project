"use client";
// base
import { Tabs } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import { FC, useState } from "react";
import { BsFillCalendarFill, BsSearch } from "react-icons/bs";
import { FaMapMarkedAlt, FaPlaneDeparture } from "react-icons/fa";
import style from "../TabSearchBox/TabSearchBox.module.css";

interface IPropType {}

const TabSearchBox: FC<IPropType> = () => {
  const [activeTab, setActiveTab] = useState("1");
  const tabContent = [
    {
      id: 1,
      title: "مقصد",
      icon: <FaMapMarkedAlt />,
      label: "مقصد",
      description: "مقصد بعدی کجاست؟",
    },
    {
      id: 2,
      title: "تور",
      icon: <FaPlaneDeparture />,
      label: "فعالیت",
      description: "انتخاب فعالیت",
    },
    {
      id: 3,
      title: "فعالیت",
      icon: <BsFillCalendarFill />,
      label: "نوع تور",
      description: "انتخاب نوع تور",
    },
  ];
  const variants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center md:justify-between xl:absolute xl:bottom-24 xl:right-20 gap-12 p-5 text-black font-extrabold">
      <Tabs
        activeKey={activeTab}
        onChange={(key) => setActiveTab(key)}
        items={tabContent.map((content, i) => {
          const id = String(i + 1);
          return {
            key: id,
            label: (
              <div className="flex items-center text-base z-0 gap-1">
                {content.icon}
                {content.title}
              </div>
            ),
            children: (
              <AnimatePresence mode="wait">
                {activeTab === id && (
                  <motion.div
                    key={id}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={variants}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-center lg:gap-32 bg-white text-black p-10 md:py-5 rounded-2xl lg:rounded-[100px] w-[320px] sm:w-[500px] md:w-[600px] lg:w-[940px]"
                  >
                    {tabContent.map((item, index) => (
                      <div key={index} className="mb-4 w-[100px]">
                        <h3>{item.label}</h3>
                        <span>{item.description}</span>
                      </div>
                    ))}
                    <div className="flex items-center justify-center gap-2 rounded-[40px] text-white text-lg font-bold py-5 px-9 bg-gt-gradient-1 mt-4 lg:mt-0">
                      <BsSearch />
                      <button>
                        <p>جستجو</p>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            ),
          };
        })}
      ></Tabs>
    </section>
  );
};

export { TabSearchBox };
