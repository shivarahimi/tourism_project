// base
import { ExploreEventDataType } from "#/src/core/data/Landing/ExploreEvent.data";
import { FC } from "react";
import { FullButton } from "../Form/FullButton/FullButton";
import { FullImage } from "../FullImage/FullImage";
import { exploreEventTypeEnum } from "#/src/core/enums/exploreEventType.enum";
import { RightToLeft } from "../Animation/RightToLeft/RightToLeft";

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
      ? "lg:px-2"
      : "px-6 lg:w-[54%] xl:px-32";
  const exploreEventsubData =
    dataType === exploreEventTypeEnum.exploreEvent
      ? "lg:flex-row lg:flex-wrap lg:items-center"
      : "";
  const exploreEventStar =
    dataType === exploreEventTypeEnum.exploreEvent
      ? ""
      : "flex items-center gap-2";
  return (
    <section>
      <div className={`flex flex-col justify-center z-20 ${exploreEventWidth}`}>
        <div className={`mb-5 ${exploreEventText}`}>
          <RightToLeft duration={0.5} animName="easeOut">
            <div className={`text-[28px] xl:text-[42px] ${exploreEventStar}`}>
              <FullImage
                src={defaultImage1}
                alt="استار"
                width={28}
                height={28}
              />
              {data.title}
            </div>
          </RightToLeft>
          <h1 className="font-black text-[35px] xl:text-[53px]">{data.info}</h1>
          <RightToLeft duration={0.5} animName="easeOut">
            <p className="text-[20px] xl:text-lg text-start">{data.desc}</p>
          </RightToLeft>
        </div>
        <div>
          <ul
            className={`flex flex-col font-extrabold mb-5 ${exploreEventsubData}`}
          >
            {data.subData.map((item) => (
              <li key={item.id} className="flex items-center lg:w-[50%] gap-2">
                <span
                  className="text-xl"
                  style={{
                    background:
                      "linear-gradient(90deg, #4300e7 0%, #7d00fc 100%)",
                    WebkitMaskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>')`,
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskSize: "contain",
                    display: "flex", // برای هم‌راستا شدن آیکون داخل دایو
                    alignItems: "center",
                    justifyContent: "center",
                    color: "transparent",
                  }}
                  // style={{
                  //   color: "red",
                  //   WebkitBackgroundClip: "text",
                  //   WebkitTextFillColor: "transparent",
                  // }}
                  // style={{
                  //   color: "red",
                  // }}
                >
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
