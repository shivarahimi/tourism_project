"use client";

import { useEffect, useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";

import "swiper/css";
import "swiper/css/navigation";

import { FullImage } from "#/src/components/common/FullImage/FullImage";
import { slidesListData } from "#/src/core/data/Landing/slides.data";

import style from "./slidesVideos.module.css";
import { LoadingSpinner } from "#/src/components/common/LoadingSpinner/LoadingSpinner";

const SlideVideos = () => {
  const [loading, setLoading] = useState(true);

  // استفاده از useMemo برای محاسبه slidesPerView
  // const slidesPerView = useMemo(() => {
  //   const width = window.innerWidth;
  //   if (width >= 1200) return 4;
  //   if (width >= 1024) return 3;
  //   if (width >= 768) return 2;
  //   return 1;
  // }, []);

  useEffect(() => {
    // شبیه‌سازی تأخیر برای لودینگ
    const timeout = setTimeout(() => {
      setLoading(false); // پس از 2 ثانیه لودینگ را غیرفعال کن
    }, 1000);

    return () => clearTimeout(timeout); // پاک کردن تایمر
  }, []);

  // اگر لودینگ تروباشد کامپوننت لودینگ نمایش داده میشود
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className={`${style.swiperContainer} 2xl:max-w-[1400px] 2xl:mx-auto`}>
      <Swiper
        className="mySwiper absolute top-[-60px] md:top-[-90px] mt-28"
        modules={[Navigation, Keyboard]}
        spaceBetween={15}
        navigation={{
          nextEl: `.${style.customSwiperButtonNext}`,
          prevEl: `.${style.customSwiperButtonPrev}`,
        }}
        keyboard={{ enabled: true }}
        // slidesPerView={slidesPerView} // استفاده از slidesPerView محاسبه شده
        breakpoints={{
          1200: { slidesPerView: 4 },
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          640: { slidesPerView: 1 },
        }}
        grabCursor={true}
      >
        {slidesListData.map((item) => (
          <SwiperSlide
            key={item.id}
            className={`mb-[30px] flex ${style.swiperSlide}`}
          >
            <div className={`relative w-[100%] ${style.customImageContainer}`}>
              <FullImage
                src={item.image}
                alt="ویدیو ها"
                width={600}
                height={436}
                quality={100}
                className={`!rounded-xl mx-auto w-[100%] ${style.customImage}`}
                objectFit="cover"
              />
              <div className={`${style.overlayTopLeft}`}></div>
              <div className={`${style.overlayBottomRight}`}></div>
              <div className={`${style.playButtonContainer} mb-12`}>
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

      <div
        className={`flex justify-center ${style.swiperContainer} !mt-[-2rem]`}
      >
        <div className={`${style.customSwiperButtonPrev}`}>
          <FaArrowRight size={14} color="black" />
        </div>
        <div className={`${style.customSwiperButtonNext}`}>
          <FaArrowLeft size={14} color="black" />
        </div>
      </div>
    </div>
  );
};

export { SlideVideos };
