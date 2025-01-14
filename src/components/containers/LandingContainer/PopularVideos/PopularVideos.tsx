// base
import { FC } from "react";

// components
import { TitleLanding } from "#/src/components/common/TItleLanding/TitleLanding";

import { SlideVideos } from "./SlideVideos/SlideVideos";
import { FeatureItemData } from "#/src/core/data/Landing/Toolbar.data";
import FeatureItem from "#/src/components/common/FeatureItem/FeatureItem";

interface ISharePropType {
  dataType: "toolsBar" | "popularVideos";
}

const PopularVideos: FC<ISharePropType> = ({ dataType }) => {
  const data = FeatureItemData[dataType];
  return (
    <>
      <TitleLanding
        className="mt-20"
        title1="برای تجربه جدید آماده شوید"
        title2="محبوب ترین ویدیوها"
      />

      <section
        className="h-full pb-36 relative"
        style={{
          backgroundImage: "url('/images/landing/PopularVideos/back.png')",
        }}
      >
        <SlideVideos />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 max-w-[1140px] mx-auto ">
          <FeatureItem data={data} />
        </div>
      </section>
    </>
  );
};

export { PopularVideos };
