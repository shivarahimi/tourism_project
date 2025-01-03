"use client";
// base
import { FC, useState } from "react";
import { headerMenuList } from "@/core/data/HeaderMenu/HeaderMenu.data";
import { BsSearch } from "react-icons/bs";
import { HeaderResponsive } from "./HeaderResponsive/HeaderResponsive";
import { FaAngleDown, FaRegComment } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FullImage } from "../../common/FullImage/FullImage";
import { Intro } from "../../containers/LandingContainer/Intro/Intro";

interface IPropType {}

const Headers: FC<IPropType> = () => {
  const defaultImage = "/images/landing/Headers/logo-2.png";
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  return (
    <header className="relative bg-[url('/images/landing/Headers/photo_6017237486956299690_y.jpg')] h-[300vh] xl:h-[120vh] bg-cover bg-center bg-no-repeat text-white py-8 z-50">
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

        <ul className="hidden md:flex md:items-center md:justify-center font-bold cursor-pointer gap-5 z-50">
          {headerMenuList.map((item) => (
            <li key={item.key} className="relative group">
              <div className="flex items-center gap-1">
                {item.title}
                <FaAngleDown />
              </div>
              {/* ==== sub menu ==== */}
              {item.subMenu?.length > 0 && (
                <ul className="absolute right-0 mt-2 hidden w-48 bg-gt-gradient-1 rounded-md shadow-lg group-hover:block">
                  {item.subMenu.map((subItem: any) => (
                    <li key={subItem.id} className="relative group">
                      <a
                        href={subItem.href}
                        className="block px-4 py-2 text-white hover:bg-gray-100"
                      >
                        {subItem.title}
                      </a>
                      {subItem.subMenu && (
                        <ul className="absolute left-full top-0 hidden bg-gt-gradient-1 rounded-md shadow-lg group-hover:block">
                          {subItem.subMenu.map((childItem: any) => (
                            <li
                              key={childItem.id}
                              className="px-4 py-2 hover:bg-gray-100"
                            >
                              <a
                                href={childItem.href}
                                className="block text-white"
                              >
                                {childItem.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <section className="z-50">
          <div className="hidden md:flex bg-gt-gradient-1 rounded-[40px] py-5 px-10 gap-3 cursor-pointer">
            <div className="flex gap-1">
              <FaRegComment className="hover:rotate-360" />
              <span className="hover:underline hover:decoration-1 underline-offset-4 hover:underline-offset-2 transition-all duration-500">
                تماس با ما
              </span>
            </div>

            <BsSearch onClick={() => setIsOverlayVisible(true)} />
            {isOverlayVisible && (
              <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
                {/* محتوای داخل لایه */}
                <div
                  className="bg-white p-4 w-[50%] shadow-lg rounded-r relative"
                  onClick={(e) => e.stopPropagation()} // جلوگیری از بسته شدن هنگام کلیک داخل محتوای لایه
                >
                  <input
                    type="search"
                    placeholder="جستجوی کلمات کلیدی..."
                    className="h-7 focus:outline-none focus:border-none text-black w-[100%]"
                  />
                </div>
                <button
                  className="flex items-center justify-center h-[60px] w-[120px] bg-gt-gradient-1 rounded-l font-bold text-lg"
                  type="submit"
                >
                  <BsSearch />
                </button>
                <button
                  onClick={() => setIsOverlayVisible(false)}
                  className="absolute top-10 right-10 p-3 rounded-lg text-white bg-gt-gradient-1"
                >
                  <AiOutlineClose size={20} />
                </button>
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
