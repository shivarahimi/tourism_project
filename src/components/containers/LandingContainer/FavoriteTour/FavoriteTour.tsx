// "use client";

// components
import { FavoriteTourCard } from "./FavoriteTourCard/FavoriteTourCard";
import { TitleLanding } from "#/src/components/common/TItleLanding/TitleLanding";

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
      className=" h-full  pt-16 pb-16 px-8"
      style={{
        backgroundImage:
          "url('/images/landing/FavoriteTour/bottom-shape2.png')",
      }}
    >
      <TitleLanding title1=" کشف کردن" title2="مورد علاقه ترین مکان تور" />

      <div className="grid sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-5 2xl:grid-cols-5 2xl:max-w-[1400px] 2xl:mx-auto md:gap-8">
        {favoriteTourList.map((item: IFavoriteTourListType) => (
          <FavoriteTourCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export { FavoriteTour };
