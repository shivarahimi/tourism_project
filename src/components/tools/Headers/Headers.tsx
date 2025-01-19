"use client";
// base
import { FC, useState } from "react";
import Link from "next/link";
// lib
import { BsSearch } from "react-icons/bs";
import { FaAngleDown, FaRegComment } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
// components
import { HeaderResponsive } from "./HeaderResponsive/HeaderResponsive";
import { FullImage } from "../../common/FullImage/FullImage";
import { Intro } from "../../containers/LandingContainer/Intro/Intro";
import { SearchInput } from "../../common/Form/SearchInput/SearchInput";
// core
import {
  headerMenuList,
  ISubMenu,
} from "@/core/data/HeaderMenu/HeaderMenu.data";
import { Form, Formik } from "formik";

interface IPropType {}

const Headers: FC<IPropType> = () => {
  const defaultImage = "/images/landing/Headers/logo-2.png";
  const [initialValues, setInitialValues] = useState<any>({});
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [searchText, setSearchText] = useState("");

  // searching
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    // console.log("Searching for:", searchText);
  };
  // تابع برای مدیریت تغییرات ورودی
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  return (
    <header className="header relative bg-[url('/images/landing/Headers/photo_6017237486956299690_y.jpg')] h-auto bg-cover bg-center bg-no-repeat text-white py-8">
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>

      <section className="flex items-center justify-between w-[90%] mx-auto z-50">
        <section className="flex items-center justify-start gap-3 z-50">
          <div className="lg:hidden cursor-pointer">
            <HeaderResponsive />
          </div>
          <div>
            <FullImage src={defaultImage} alt="عکس" width={150} height={150} />
          </div>
        </section>

        <ul className="hidden lg:flex lg:items-center lg:justify-center font-bold cursor-pointer gap-5 z-50">
          {headerMenuList.map((item) => (
            <li key={item.key} className="relative group">
              <div className="flex items-center gap-1 hover:text-purple-300">
                {item.title}
                <FaAngleDown />
              </div>
              <ul className="absolute right-0 top-3 mt-2 hidden w-48 bg-gt-gradient-1 rounded-md shadow-lg group-hover:block">
                {item.subMenu?.map((subItem: ISubMenu) => (
                  <li key={subItem.id} className="relative group">
                    <Link
                      href={subItem.href}
                      className="block px-4 py-2 text-white hover:underline hover:decoration-1 underline-offset-4 hover:underline-offset-2 transition-all duration-500"
                    >
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <section className="z-50">
          <div className="hidden lg:flex bg-gt-gradient-1 rounded-[40px] py-5 px-10 gap-3 cursor-pointer">
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
                <Formik
                  initialValues={initialValues}
                  onSubmit={handleSearch}
                  enableReinitialize
                >
                  {() => (
                    <Form>
                      <SearchInput
                        searchText={searchText}
                        handleChange={handleChange}
                      />
                    </Form>
                  )}
                </Formik>

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
