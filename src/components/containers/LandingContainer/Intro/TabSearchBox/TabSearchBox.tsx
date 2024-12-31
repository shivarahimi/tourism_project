"use client";
// base
import { FC, useState } from "react";
import { BsFillCalendarFill, BsSearch } from "react-icons/bs";
import { Tabs } from "antd";
import { BiCloset } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkedAlt, FaPlaneDeparture } from "react-icons/fa";

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
    // <div className="flex flex-col-reverse md:flex-row items-center md:justify-between absolute bottom-10 right-20 gap-12 p-5 rounded-[100px] w-[915px] bg-white text-black font-extrabold">
    //   {/* Tab headers */}
    //   <div className="flex border-b">
    //     {tabContent.map((tab) => (
    //       <button
    //         key={tab.id}
    //         onClick={() => setActiveTab(tab.id)}
    //         className={`px-4 py-2 text-sm font-medium ${
    //           activeTab === tab.id
    //             ? "text-blue-600 border-b-2 border-blue-600"
    //             : "text-gray-600"
    //         }`}
    //       >
    //         {tab.label}
    //       </button>
    //     ))}
    //   </div>

    //   {/* Tab content */}
    //   <div className="mt-4">
    //     <div className="space-y-4">
    //       {tabContent.map((tab) => (
    //         <div
    //           key={tab.id}
    //           className={`${
    //             activeTab === tab.id ? "block" : "hidden"
    //           } transition-all`}
    //         >
    //           <h3 className="text-lg font-semibold">{tab.label}</h3>
    //           <p className="text-gray-700">{tab.description}</p>
    //           <div className="flex items-center justify-center gap-2 rounded-[40px] text-white text-lg font-bold py-3 px-6 bg-gradient-to-r from-blue-500 to-blue-700 mt-4">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               strokeWidth="2"
    //               stroke="currentColor"
    //               className="w-5 h-5"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    //               />
    //             </svg>
    //             <button>
    //               <p>جستجو</p>
    //             </button>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <section className="flex flex-col-reverse md:flex-row items-center md:justify-between absolute md:bottom-10 left-44 md:right-20 gap-12 p-5 md:w-[915px] text-black font-extrabold">
      <Tabs
        activeKey={activeTab}
        onChange={(key) => setActiveTab(key)}
        items={tabContent.map((content, i) => {
          const id = String(i + 1);
          return {
            key: id,
            label: (
              <div className="flex items-center text-base gap-1">
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
                    className="flex flex-col md:flex-row items-center justify-center md:gap-40 bg-white text-black p-10 md:p-3 rounded-2xl md:rounded-[100px]"
                  >
                    {tabContent.map((item, index) => (
                      <div key={index} className="mb-4 w-[100px]">
                        <h3>{item.label}</h3>
                        <span>{item.description}</span>
                      </div>
                    ))}
                    <div className="flex items-center justify-center gap-2 rounded-[40px] text-white text-lg font-bold py-5 px-9 bg-gt-gradient-1 mt-4">
                      <BsSearch />
                      <button>
                        <p>جستجو</p>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            ),

            // icon: <BiCloset />,
          };
        })}
      ></Tabs>

      {/* <div className="flex flex-col-reverse md:flex-row items-center md:justify-between absolute bottom-40 right-20 gap-12 p-5 rounded-[100px] w-[915px] bg-white text-black font-extrabold	">
        <div>
          <h3>مقصد</h3>
          <span>مقصد بعدی کجاست؟</span>
        </div>
        <div>
          <h3>فعالیت</h3>
          <span>انتخاب فعالیت</span>
        </div>
        <div>
          <h3>نوع تور</h3>
          <span>انتخاب نوع تور</span>
        </div>
        <div className="flex items-center justify-center gap-2 rounded-[40px] text-white text-lg font-bold py-5 px-9 bg-gt-gradient-1">
          <BsSearch />
          <button>
            <p>جستجو</p>
          </button>
        </div>
      </div> */}
    </section>
  );
};

export { TabSearchBox };
