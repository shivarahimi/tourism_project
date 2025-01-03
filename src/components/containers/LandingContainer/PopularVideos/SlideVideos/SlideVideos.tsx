"use client";

// lib
import { Keyboard, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// components
import { FullImage } from "#/src/components/common/FullImage/FullImage";

// data
import { slidesListData } from "#/src/core/data/Landing/slides.data";

// style
import style from "./slidesVideos.module.css";
// icon
import { useRef, useEffect } from "react";
import { CiPlay1 } from "react-icons/ci";

const SlideVideos = () => {
  // برای کلیک دکمه های کاستوم
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      swiperRef.current.params.navigation
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className={`${style.swiperContainer}  2xl:max-w-[1400px] 2xl:mx-auto`}>
      <Swiper
        className="mySwiper absolute top-[-90px] mt-28"
        modules={[Navigation, Keyboard]}
        spaceBetween={15}
        navigation={{
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
        keyboard={{
          enabled: true,
        }}
        scrollbar={{ draggable: true }}
        loop={true}
        grabCursor={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          1200: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 1,
          },
        }}
      >
        {slidesListData.map((item) => (
          <SwiperSlide
            key={item.id}
            className={` mb-[30px] flex  ${style.swiperSlide} `}
          >
            <div className={`relative w-[100%] ${style.customImageContainer}`}>
              <FullImage
                src={item.image}
                alt="ویدیو ها"
                width={600}
                height={436}
                quality={100}
                className={`!rounded-xl mx-auto w-[100%]  ${style.customImage}`}
                objectFit="cover"
              />

              <div className={`${style.overlayTopLeft}`}></div>
              <div className={`${style.overlayBottomRight} `}></div>

              <div className={`${style.playButtonContainer}`}>
                <button className={`${style.playButton} relative`}>
                  <CiPlay1 />
                </button>

                <div className="absolute top-[4rem] text-white z-10 w-[200px] flex">
                  <span>{item.titleSlide}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className={`flex justify-center ${style.swiperContainer}`}>
        <div
          className={`${style.customSwiperButtonPrev} customSwiperButtonPrev`}
          ref={prevRef}
        >
          <FaArrowRight size={14} color="black" />
        </div>
        <div
          className={`${style.customSwiperButtonNext} customSwiperButtonNext`}
          ref={nextRef}
        >
          <FaArrowLeft size={14} color="black" />
        </div>
      </div>
    </div>
  );
};

export { SlideVideos };
