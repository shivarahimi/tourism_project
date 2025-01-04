// base
import { FC } from "react";
// components
import FeatureItem from "#/src/components/common/FeatureItem/FeatureItem";
// data
import { FeatureItemData } from "#/src/core/data/Landing/Toolbar.data";

interface ISharePropType {
  dataType: "toolsBar" | "popularVideos"; // برای مشخص کردن نوع داده
}

const ToolsBar: FC<ISharePropType> = ({ dataType }) => {
  const data = FeatureItemData[dataType];

  return (
    <section
      className="bg-customPink  h-full  p-4  py-[9rem]"
      style={{
        backgroundImage: "url('/images/landing/ToolsBar/bottom-shape.png')",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:max-w-[1280px] 2xl:mx-auto pb-4 ">
        <FeatureItem data={data} dataType={dataType} />
      </div>
    </section>
  );
};

export { ToolsBar };
