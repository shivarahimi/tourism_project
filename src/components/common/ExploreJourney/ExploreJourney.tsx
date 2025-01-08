// base
import { ExploreEventDataType } from "#/src/core/data/Landing/ExploreEvent.data";
import { FC } from "react";
import { FullButton } from "../FullButton/FullButton";
import { FullImage } from "../FullImage/FullImage";
import { exploreEventTypeEnum } from "#/src/core/enums/exploreEventType.enum";

interface IPropType {
  data: ExploreEventDataType;
  dataType?: "exploreEvent" | "startJourney";
}

const ExploreJourney: FC<IPropType> = ({ data, dataType }) => {
  const defaultImage1 = "/images/landing/StartJourney/star2.png";

  const exploreEventText =
    dataType === exploreEventTypeEnum.exploreEvent
      ? "text-[#343a40]"
      : "text-white";
  const exploreEventWidth =
    dataType === exploreEventTypeEnum.exploreEvent
      ? ""
      : "px-6 lg:w-[54%] lg:px-32";
  const exploreEventsubData =
    dataType === exploreEventTypeEnum.exploreEvent
      ? "lg:flex-row lg:flex-wrap lg:items-center"
      : "";
  const exploreEventStar =
    dataType === exploreEventTypeEnum.exploreEvent
      ? ""
      : "flex items-center gap-2";
  // const isExploreEvent = dataType === exploreEventTypeEnum.exploreEvent;
  return (
    <section>
      <div className={`flex flex-col justify-center z-20 ${exploreEventWidth}`}>
        <div className={`mb-5 ${exploreEventText}`}>
          <div className={`text-[42px] ${exploreEventStar}`}>
            <FullImage src={defaultImage1} alt="استار" width={28} height={28} />
            {data.title}
          </div>
          <h1 className="font-black text-[53px]">{data.info}</h1>
          <p className="text-lg text-start">{data.desc}</p>
        </div>
        <div>
          <ul
            className={`flex flex-col font-extrabold mb-5 ${exploreEventsubData}`}
          >
            {data.subData.map((item) => (
              <li key={item.id} className="flex items-center lg:w-[50%] gap-2">
                <span className="text-xl" style={{ color: "gt-gradient-1" }}>
                  {item.icon}
                </span>
                <p className={`${exploreEventText} text-base`}>{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
        <FullButton text="رزرو" className="w-[80%] mt-8" />
      </div>
    </section>
  );
};

export { ExploreJourney };
