// "use client";

// components
import { FullImage } from "#/src/components/common/FullImage/FullImage";
import { FavoriteTourCard } from "./FavoriteTourCard/FavoriteTourCard";

// animation
import { RightToLeft } from "#/src/components/common/Animation/RightToLeft/RightToLeft";

// image
import star from "$/images/landing/FavoriteTour/star.png";

// data
import {
  favoriteTourListData,
  IFavoriteTourListType,
} from "#/src/core/data/Landing/FavoriteTour.data";

const FavoriteTour = () => {
  // data
  const favoriteTourList = favoriteTourListData;

  return (
    <section
      className=" h-full lg:h-[52rem] py-32 px-8"
      style={{
        backgroundImage:
          "url('/images/landing/FavoriteTour/bottom-shape2.png')",
      }}
    >
      <div className="flex justify-center items-center">
        <FullImage src={star.src} alt="کلاه" width={25} height={25} />
        <RightToLeft duration={0.5} animName="easeOut">
          <h3 className="text-customBlack text-[1.5rem] lg:text-[2.62rem]">
            کشف کردن
          </h3>
        </RightToLeft>
      </div>

      <h1 className="flex justify-center items-center text-[2.5rem] lg:text-[3.75rem] font-black text-customBlack">
        <div>مورد علاقه ترین مکان تور</div>
      </h1>

      <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {favoriteTourList.map((item: IFavoriteTourListType) => {
          return <FavoriteTourCard key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export { FavoriteTour };
