// base
import { RightToLeft } from "#/src/components/common/Animation/RightToLeft/RightToLeft";
import { ExploreJourney } from "#/src/components/common/ExploreJourney/ExploreJourney";
import { FullImage } from "#/src/components/common/FullImage/FullImage";
import { ExploreEventData } from "#/src/core/data/Landing/ExploreEvent.data";
import { FC } from "react";

interface ISharePropType {
  dataType: "exploreEvent" | "startJourney";
}

const StartJourney: FC<ISharePropType> = ({ dataType }) => {
  const defaultImage1 = "/images/landing/StartJourney/wc5.png";
  const defaultImage2 = "/images/landing/StartJourney/wc6.png";
  const defaultImage3 = "/images/landing/StartJourney/line1.png";

  const data = ExploreEventData[dataType];
  return (
    // به والد که ریلیتیو داره و متن زدایندکس20دادم و به عکس منفی تا عکس زیر متن واقع شود
    <section className="relative z-20 bg-[url('/images/landing/StartJourney/wc-bg2.png')] bg-cover bg-center bg-no-repeat py-40">
      <div className="width-[100%] h-[100%]">
        <FullImage
          src={defaultImage1}
          alt="عکس"
          width={650}
          height={650}
          className="hidden xl:block absolute top-0 left-0 h-full"
        />
      </div>
      <FullImage
        src={defaultImage2}
        alt="چمدان"
        width={550}
        height={550}
        className="hidden lg:block !-z-10 xl:!z-20 absolute top-20 left-[17rem]"
      />

      <FullImage
        src={defaultImage3}
        alt="لاین"
        width={600}
        height={600}
        className="hidden lg:block lg:-right-40 lg:-bottom-20 absolute xl:-bottom-20 xl:right-60 -z-20"
      />

      <ExploreJourney data={data} />
    </section>
  );
};

export { StartJourney };
