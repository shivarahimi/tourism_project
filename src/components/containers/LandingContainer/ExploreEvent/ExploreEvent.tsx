// base
import { FC } from "react";
// components
import { ExploreJourney } from "#/src/components/common/ExploreJourney/ExploreJourney";
// core
import { FullImage } from "#/src/components/common/FullImage/FullImage";
import { ExploreEventData } from "#/src/core/data/Landing/ExploreEvent.data";

interface ISharePropType {
  dataType: "exploreEvent" | "startJourney";
}

const ExploreEvent: FC<ISharePropType> = ({ dataType }) => {
  const data = ExploreEventData[dataType];
  const defaultImage1 = "/images/landing/ExploreEvent/banner_img_1.png";

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 w-[90%] mx-auto py-36">
      <div className="w-full h-full">
        <FullImage src={defaultImage1} alt="عکس" width={650} height={650} />
      </div>
      <ExploreJourney data={data} dataType={dataType} />
    </section>
  );
};

export { ExploreEvent };
