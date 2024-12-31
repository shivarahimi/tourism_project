"use client";
// base
import { FC, useState } from "react";
import { headerMenuList } from "@/core/data/HeaderMenu/HeaderMenu.data";
import { BsSearch } from "react-icons/bs";
import { HeaderResponsive } from "./HeaderResponsive/HeaderResponsive";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FullImage } from "../../common/FullImage/FullImage";
import { Intro } from "../../containers/LandingContainer/Intro/Intro";

interface IPropType {}

const Headers: FC<IPropType> = () => {
  const defaultImage = "/images/landing/Headers/logo-2.png";
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  return (
    <header className="relative bg-[url('/images/landing/Headers/photo_6017237486956299690_y.jpg')] h-full md:h-screen bg-cover bg-center bg-no-repeat text-white py-8 z-50">
      <div className="absolute inset-0 bg-black bg-opacity-90 z-0"></div>

      <section className="flex items-center justify-between w-[90%] mx-auto z-50">
        <section className="flex items-center justify-start gap-3 z-50">
          <div className="md:hidden cursor-pointer">
            <HeaderResponsive />
          </div>
          <div>
            <FullImage src={defaultImage} alt="عکس" width={150} height={150} />
          </div>
        </section>

        <ul className="hidden md:flex md:items-center md:justify-center font-bold	gap-5 z-50">
          {headerMenuList.map((item) => (
            <li key={item.key}>{item.title}</li>
          ))}
        </ul>

        <section className="z-50">
          <div className="hidden md:flex bg-gt-gradient-1 rounded-[40px] py-5 px-10 gap-3 cursor-pointer">
            <div className="flex gap-1">
              <FaRegComment />
              <span className="hover:underline  hover:decoration-1 underline-offset-4 hover:underline-offset-2 transition-all duration-500">
                تماس با ما
              </span>
            </div>
            <BsSearch onClick={() => setIsOverlayVisible(true)} />
            {isOverlayVisible && (
              <div
                className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
                onClick={() => setIsOverlayVisible(false)} // بستن با کلیک روی پس‌زمینه
              >
                {/* محتوای داخل لایه */}
                <div
                  className="bg-white p-4 rounded shadow-lg relative"
                  onClick={(e) => e.stopPropagation()} // جلوگیری از بسته شدن هنگام کلیک داخل محتوای لایه
                >
                  <p className="text-black">hiii</p>
                  <button
                    onClick={() => setIsOverlayVisible(false)}
                    className="absolute top-2 right-2 text-gray-600 hover:text-black"
                  >
                    <AiOutlineClose size={20} />
                  </button>
                  <h2 className="text-lg font-semibold">جستجو</h2>
                  <p>این یک مثال از محتوای داخلی است.</p>
                </div>
              </div>
            )}
          </div>
        </section>
      </section>
      <Intro />
    </header>
  );
};

export { Headers };
