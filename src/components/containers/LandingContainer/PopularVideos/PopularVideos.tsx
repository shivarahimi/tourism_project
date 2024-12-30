import { RightToLeft } from "#/src/components/common/Animation/RightToLeft/RightToLeft";
import { FullImage } from "#/src/components/common/FullImage/FullImage";

// image
import star from "$/images/landing/FavoriteTour/star.png";

const PopularVideos = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-40">
        <FullImage src={star.src} alt="کلاه" width={25} height={25} />
        <RightToLeft duration={0.5} animName="easeOut">
          <h3 className="text-customBlack text-[1.5rem] lg:text-[2.62rem]">
            برای تجربه جدید آماده شوید
          </h3>
        </RightToLeft>
      </div>

      <h1 className="flex justify-center items-center text-[2.5rem] lg:text-[3.75rem] font-black text-customBlack">
        <div> محبوب ترین ویدیوها </div>
      </h1>
    </>
  );
};

export { PopularVideos };
