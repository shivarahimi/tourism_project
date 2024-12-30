// base
import { FC } from "react";

// components
import { FullImage } from "#/src/components/common/FullImage/FullImage";

// anim
import { RightToLeft } from "../Animation/RightToLeft/RightToLeft";

// image
import star from "$/images/landing/FavoriteTour/star.png";

interface IPropType {
  className?: string;
  title1: string;
  title2: string;
}

const TitleLanding: FC<IPropType> = ({ className, title1, title2 }) => {
  return (
    <>
      <div className={`flex justify-center items-center ${className}`}>
        <FullImage src={star.src} alt="کلاه" width={25} height={25} />
        <RightToLeft duration={0.5} animName="easeOut">
          <h3 className="text-customBlack text-[1.5rem] lg:text-[2.62rem]">
            {title1}
          </h3>
        </RightToLeft>
      </div>

      <h1 className="flex justify-center items-center text-[2.5rem] lg:text-[3.75rem] font-black text-customBlack">
        <div> {title2}</div>
      </h1>
    </>
  );
};

export { TitleLanding };
