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
        <div className="relative  ">
          <div
            className={`${style.imageContainer} relative w-[248px] h-[351px] sm:w-[148px] sm:h-[211px] lg:w-[248px] lg:h-[351px] rounded-[300px] overflow-hidden `}
          >
            <FullImage
              src={image}
              alt="Eiffel Tower"
              className={`${style.image}  transition-transform duration-500 ease-in-out `}
              width={248}
              height={351}
            />
            <div
              className={`${style.overlay} absolute top-0 left-0 w-[248px] h-[351px] sm:w-[148px] sm:h-[211px] lg:w-[248px] lg:h-[351px] opacity-0 scale-0 
                            before:content-[''] before:absolute  before:top-0 before:left-0 
                            before:w-[248px] before:h-[351px] sm:before:w-[148px] sm:before:h-[211px] lg:before:w-[248px]  lg:before:h-[351px]
                            before:rounded-[300px] before:bg-black/30
                            before:transition-colors before:duration-[500ms] before:ease-out

                  
                  `}
            ></div>
            <div
              className={`${style.overlayTwo} absolute top-0 left-0 w-[248px] h-[351px] sm:w-[148px] sm:h-[211px] lg:w-[248px] lg:h-[351px] opacity-0 scale-0
                          before:content-[''] before:absolute  before:top-0 before:left-0 
                          before:w-[248px] before:h-[351px] sm:before:w-[148px] sm:before:h-[211px] lg:before:w-[248px]  lg:before:h-[351px]
                          before:rounded-[300px] before:bg-black/30
                          before:transition-colors before:duration-[500ms] before:ease-out
                  `}
            ></div>
          </div>
          <div
            className="absolute right-[86px] bottom-[-8px] text-white text-sm 
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
