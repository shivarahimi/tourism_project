// base
import { FullButton } from "#/src/components/common/FullButton/FullButton";
import { FullImage } from "#/src/components/common/FullImage/FullImage";
import { FC } from "react";
import { FaCertificate } from "react-icons/fa";

interface IPropType {}

const ExploreEvent: FC<IPropType> = () => {
  const defaultImage1 = "/images/landing/ExploreEvent/banner_img_1.png";
  const data = [
    {
      id: 1,
      title: "فونت های نامحدود",
      icon: <FaCertificate />,
    },
    {
      id: 2,
      title: "فونت های نامحدود",
      icon: <FaCertificate />,
    },
    {
      id: 3,
      title: "رفع رایگان و به روز رسانی ها",
      icon: <FaCertificate />,
    },
    {
      id: 4,
      title: "رفع رایگان و به روز رسانی ها",
      icon: <FaCertificate />,
    },
  ];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 w-[90%] mx-auto py-36">
      <div className="w-full h-full">
        <FullImage src={defaultImage1} alt="عکس" width={650} height={650} />
      </div>
      <div className="flex flex-col justify-center">
        <div className=" mb-5">
          <div className="text-[42px] text-[#343a40]">کاوش رویداد</div>
          <h1 className="font-black text-[60px] text-[#343a40]">
            شهرهای نفس گیر
          </h1>
          <p className="text-lg text-start text-[#343a40]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
          </p>
        </div>
        <div>
          <ul className="flex flex-col lg:flex-row lg:flex-wrap lg:items-center font-extrabold mb-5">
            {data.map((item) => (
              <li key={item.id} className="flex items-center lg:w-[50%] gap-2">
                <span className="text-xl" style={{ color: "gt-gradient-1" }}>
                  {item.icon}
                </span>
                {/* <FaCertificate className="text-gt-gradient-1" /> */}
                <p className="text-[#343a40] text-base">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
        <FullButton text="رزرو" className="w-[80%] mt-8" />
      </div>
    </section>
  );
};

export { ExploreEvent };
