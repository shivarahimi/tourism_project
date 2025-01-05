"use client";

// base
import { FC } from "react";

// components
import { FullImage } from "#/src/components/common/FullImage/FullImage";

// anim
import { FadeInUp } from "#/src/components/common/Animation/FadeInUp/FadeInUp";

import { IFavoriteTourListType } from "#/src/core/data/Landing/FavoriteTour.data";

//css
import style from "./FavoriteTourCard.module.css";

const FavoriteTourCard: FC<IFavoriteTourListType> = ({
  image,
  titleTour,
  numbertour,
}) => {
  return (
    <FadeInUp duration={1.2} delay={0.2}>
      <div className="flex flex-col justify-center items-center mt-16">
        <div className="relative">
          <div
            className={`${style.imageContainer} relative 
                        w-[250px] h-[355px]  
                        md:w-[230px] 
                        lg:w-[300px] lg:h-[440px]
                        xl:w-[255px] xl:h-[400px]
                        rounded-[300px] overflow-hidden `}
          >
            <FullImage
              src={image}
              alt="tour"
              className={`${style.image}
                      w-[250px] h-[355px]  
                      md:w-[230px] 
                      lg:w-[300px] lg:h-[440px]
                      xl:w-[255px] xl:h-[400px]
                      transition-transform duration-500 ease-in-out `}
              width={248}
              height={351}
            />
            {/* overlay */}
            <div
              className={`${style.overlay} absolute top-0 left-0 opacity-0 scale-0 
                            w-[250px] h-[355px] 
                            md:w-[230px] 
                            lg:w-[300px] lg:h-[440px]
                            xl:w-[255px] xl:h-[400px]
                            before:content-[''] before:absolute  before:top-0 before:left-0 
                            before:w-[250px] before:h-[355px] 
                            md:before:w-[230px]  
                            lg:before:w-[300px] lg:before:h-[440px]
                            xl:before:w-[255px] xl:before:h-[400px]
                            before:rounded-[300px] before:bg-black/30
                            before:transition-colors before:duration-[500ms] before:ease-out

                  
                  `}
            ></div>
            <div
              className={`${style.overlayTwo} absolute top-0 left-0 opacity-0 scale-0
                          w-[250px] h-[355px] 
                          md:w-[230px] 
                          lg:w-[300px] lg:h-[440px]
                          xl:w-[255px] xl:h-[400px]
                          before:content-[''] before:absolute  before:top-0 before:left-0 
                          before:w-[250px] before:h-[355px] 
                          !md:before:w-[230px]  
                          lg:before:w-[300px] lg:before:h-[440px]
                          xl:before:w-[255px] xl:before:h-[400px]
                          before:rounded-[300px] before:bg-black/30
                          before:transition-colors before:duration-[500ms] before:ease-out
                  `}
            ></div>
          </div>

          <div
            className="absolute right-[99px]  bottom-[-8px]  
            sm:right-[52px] 
            md:right-[94px] md:bottom-[-10px] 
            lg:right-[120px] 
            xl:right-[100px]
            text-white text-sm 
            font-black py-[0.3rem] px-[0.75rem] rounded-[20px] bg-black"
          >
            <span>{`${numbertour} تور`}</span>
          </div>
        </div>

        <div
          className={`mt-4 text-center cursor-pointer relative inline-block  
                        before:content-[''] before:absolute  before:bottom-0 before:left-[1px] before:w-0 before:h-[2px]
                      before:bg-[#1f224c] before:transition-width before:duration-[300ms] before:ease-in-out
                        ${style.textTour}`}
        >
          <h3 className="text-[#1f224c] text-[1.87rem] font-black inline ">
            {titleTour}
          </h3>
        </div>
      </div>
    </FadeInUp>
  );
};

export { FavoriteTourCard };
