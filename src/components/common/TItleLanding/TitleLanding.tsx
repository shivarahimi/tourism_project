// base
import { FC } from "react";

// components
import { FullImage } from "#/src/components/common/FullImage/FullImage";

// anim
import { RightToLeft } from "../Animation/RightToLeft/RightToLeft";

// image
import star from "$/images/landing/FavoriteTour/star.png";
import star2 from "$/images/landing/about/star2.png";

// data
import { dataTypePageEnum } from "#/src/core/enums/dataTypePage.enum";

interface IPropType {
  className?: string;
  title1: string;
  title2: string;
  className2?: string;
  dataType?: "toolsBar" | "popularVideos" | "contact"; // برای مشخص کردن نوع داده
}

const TitleLanding: FC<IPropType> = ({
  className,
  title1,
  title2,
  className2,
  dataType,
}) => {
  // var
  const contact = dataType === dataTypePageEnum.contact;
  return (
    <>
      <div
        className={`flex justify-center items-center text-customBlack ${className}`}
      >
        {contact ? (
          <FullImage
            src={star2.src}
            alt="کلاه"
            width={25}
            height={25}
            className="text-white"
          />
        ) : (
          <FullImage src={star.src} alt="کلاه" width={25} height={25} />
        )}
        <RightToLeft duration={0.5} animName="easeOut">
          <h3 className=" text-[1.5rem] lg:text-[2.62rem]">{title1}</h3>
        </RightToLeft>
      </div>

      <h1
        className={`flex justify-center items-center text-[2rem] lg:text-[3.75rem] font-black text-customBlack ${className2}`}
      >
        <div> {title2}</div>
      </h1>
    </>
  );
};

export { TitleLanding };
