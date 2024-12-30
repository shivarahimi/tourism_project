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
      className=" h-full lg:h-[52rem] py-32 px-8"
      style={{
        backgroundImage:
          "url('/images/landing/FavoriteTour/bottom-shape2.png')",
      }}
    >
      <TitleLanding title1=" کشف کردن" title2="مورد علاقه ترین مکان تور" />

      <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {favoriteTourList.map((item: IFavoriteTourListType) => {
          return <FavoriteTourCard key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export { FavoriteTour };
