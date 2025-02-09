"use client";

// base
import { FC, useState } from "react";

import Link from "next/link";

// components
import { FullImage } from "../../common/FullImage/FullImage";
import { FullModal } from "../../common/FullModal/FullModal";

// icon
import { FaArrowLeft, FaPhone } from "react-icons/fa";
import { LiaExpandSolid } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";

// img
import logo from "$/images/landing/Headers/logo-2.png";

// data
import {
  footerLinksGroups,
  imageFooter,
  SocialNetwork,
} from "#/src/core/data/Footer/Footer.data";

// style
import style from "./Footer.module.css";
import { BsSearch } from "react-icons/bs";

const Footer: FC = () => {
  // modal
  const [showImageModal, setshowImageModal] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // برای ذخیره تصویر انتخاب شده
  return (
    <section className="bg-[#1A1B1D]  text-[#f9f9f9] px-4 lg:px-12 ">
      <div className="grid md:grid-cols-12 xl:grid-cols-10 gap-4">
        <div className=" md:col-span-6  xl:col-span-4 ">
          <div>
            <FullImage src={logo.src} alt="عکس" width={150} height={150} />
          </div>

          <div className="text-[#7F7F7F] font-normal ">
            <p className="leading-6 pt-4 text-[1.1rem]">
              تولید شده با استفاده از مواد تمیز و غیر سمی، محصولات ما برای همه
              امضا شده است. ساخته شده با استفاده از مواد تمیز و غیر سمی، محصولات
              ما امضا شده اند
            </p>
          </div>

          <div className="flex gap-6 ">
            {SocialNetwork.map((item) => {
              return (
                <div key={item.id} className="mt-8">
                  <Link
                    href={item.href}
                    className="flex items-center hover:text-[#7900FB] transition-all duration-300 ease-in-out"
                  >
                    <item.icon />
                    <span className="pr-1">{item.titleLink}</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {footerLinksGroups?.map((links, index) => (
          <div
            key={index}
            className="md:col-span-6 xl:col-span-2 p-2 flex items-center"
          >
            <ul className="mb-4">
              {links.map((link) => (
                <li
                  key={link.id}
                  className="group flex items-center space-x-2 "
                >
                  <FaArrowLeft className="transition-transform duration-300 ease-in-out transform rotate-45 group-hover:rotate-0 group-hover:text-[#7200f8]" />
                  <Link
                    href={link.href}
                    className="flex items-center group-hover:text-[#7200f8] transition-transform duration-300 ease-in-out text-[1.25rem] px-2"
                  >
                    {link.titleLink}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-b border-solid border-gray-600 w-[90%] mx-auto mb-[60px] pb-[60px]"></div>

      <div className="grid grid-cols-12 xl:grid-cols-12 items-center">
        <div className="col-span-12 xl:col-span-5 self-end">
          <div className="rounded-xl flex flex-wrap gap-2 sm:justify-center">
            {imageFooter.map((item) => {
              return (
                <div
                  key={item.id}
                  className={`relative cursor-pointer ${style.imgFooter}`}
                  onClick={() => {
                    setshowImageModal(true);
                    setSelectedImage(item.img);
                  }}
                >
                  <FullImage
                    src={item.img}
                    alt="فوتر عکس"
                    width={90}
                    height={82}
                    quality={100}
                    className="rounded-xl w-[90px] h-[82px] object-cover"
                  />

                  <div className={`${style.iconOverlay}`}>
                    <LiaExpandSolid className={`${style.expandicon}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className=" col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4">
          <h2 className="text-[1.3rem] font-extrabold mt-8 lg:mt-0  ">
            خبرنامه
          </h2>

          <div className="relative md:w-full  lg:w-[90%] mt-4">
            <div className="bg-white p-4  shadow-lg rounded-md ">
              <input
                type="email"
                placeholder="ایمیل خود را واردکنید"
                className=" h-7 focus:outline-none focus:border-none  text-black "
              />
            </div>

            <button
              className="absolute p-4 left-0 top-0 flex items-center justify-center 
                          bg-gt-gradient-1  font-bold text-lg rounded-md"
              type="submit"
            >
              اشتراک
            </button>
          </div>
        </div>

        <div
          className=" col-span-12 md:col-span-6  lg:col-span-6 xl:col-span-2
                      md:mx-auto md:flex md:flex-col  md:justify-end  pt-4 self-end "
        >
          <div className="flex items-center md:justify-start">
            <Link href="/" className="flex items-center">
              <FaPhone
                className="w-[30px] h-[30px] rounded-[50%] bg-[#7200f8] p-2"
                size={12}
              />
              <span className="pr-2 font-extrabold text-sm">
                {" "}
                88888888 (021)
              </span>
            </Link>
          </div>

          <div className="pt-4 flex  items-center md:justify-start">
            <Link href="/" className="flex items-center">
              <MdOutlineEmail
                className="w-[30px] h-[30px] rounded-[50%] bg-[#7200f8] p-2"
                size={12}
              />

              <span className="pr-2 font-extrabold text-sm">
                needhelp@company.com
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-8 pb-4">
        <p className="sm:text-lg">© کپی رایت 2024. کلیه حقوق محفوظ است.</p>
      </div>

      {showImageModal && selectedImage && (
        <FullModal
          isOpen={showImageModal}
          onCancel={() => {
            setshowImageModal(false);
            setSelectedImage(null);
          }}
        >
          <div className="relative">
            <FullImage
              src={selectedImage}
              alt="فوتر عکس بزرگ"
              width={400}
              height={100}
              quality={100}
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
        </FullModal>
      )}
    </section>
  );
};

export { Footer };
