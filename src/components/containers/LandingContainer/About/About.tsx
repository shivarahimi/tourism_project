import { FullCollapse } from "#/src/components/common/FullCollapse/FullCollapse";
import { FullImage } from "#/src/components/common/FullImage/FullImage";
import { div } from "framer-motion/client";

import img1 from "$/images/landing/about/fq1.png";
import { FaArrowLeft } from "react-icons/fa";
import { FadeInUp } from "#/src/components/common/Animation/FadeInUp/FadeInUp";

const About = () => {
  const items = [
    {
      key: "1",
      label: (
        <span className="text-[#182022] font-extrabold text-[1.3rem]">
          ارائه راه حل های تجاری
        </span>
      ),
      children: (
        <div className="flex justify-evenly">
          <div>
            <FullImage
              src={img1.src}
              alt="عکس"
              width={150}
              height={150}
              className="rounded-md"
            />
          </div>

          <div>
            <p className="text-[#504e4e]">
              هر لذتی قابل استقبال هست و هر دردی{" "}
            </p>
            <ul className="text-[#141515] text-[1.1rem] font-bold pt-2">
              <li className="flex items-center">
                <FaArrowLeft />
                <span className="pr-2">استراتژی سرمایه گذاری</span>
              </li>
              <li className="flex items-center pt-2">
                <FaArrowLeft />
                <span className="pr-2">مدیریت ریسک</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <span className="text-[#182022] font-extrabold text-[1.3rem]">
          سود اضافی از طریق Lnvest شرکت تایید شده
        </span>
      ),
      children: (
        <div className="flex justify-evenly">
          <div>
            <FullImage
              src={img1.src}
              alt="عکس"
              width={150}
              height={150}
              className="rounded-md"
            />
          </div>

          <div>
            <p className="text-[#504e4e]">
              هر لذتی قابل استقبال هست و هر دردی{" "}
            </p>
            <ul className="text-[#141515] text-[1.1rem] font-bold pt-2">
              <li className="flex items-center">
                <FaArrowLeft />
                <span className="pr-2">استراتژی سرمایه گذاری</span>
              </li>
              <li className="flex items-center pt-2">
                <FaArrowLeft />
                <span className="pr-2">مدیریت ریسک</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <span className="text-[#182022] font-extrabold text-[1.3rem]">
          راه حل های کسب کار ما
        </span>
      ),
      children: (
        <div className="flex justify-evenly">
          <div>
            <FullImage
              src={img1.src}
              alt="عکس"
              width={150}
              height={150}
              className="rounded-md"
            />
          </div>

          <div>
            <p className="text-[#504e4e] ">
              هر لذتی قابل استقبال هست و هر دردی
            </p>
            <ul className="text-[#141515] text-[1.1rem] font-bold pt-2">
              <li className="flex items-center">
                <FaArrowLeft />
                <span className="pr-2">استراتژی سرمایه گذاری</span>
              </li>
              <li className="flex items-center pt-2">
                <FaArrowLeft />
                <span className="pr-2">مدیریت ریسک</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      className="mt-[30rem] pb-[8rem] relative
                before:absolute before:left-0 before:bottom-0 before:w-full before:h-[217px]
                before:bg-[#1a1b1d] before:-z-10 before:content-['']"
    >
      <div className="grid lg:grid-cols-2 max-w-[1280px] mx-4 sm:mx-12 lg:mx-4 xl:mx-auto">
        <div className="bg-white shadow-[0px_11px_109px_0px_rgba(0,0,0,0.14)] rounded-r-xl">
          <FadeInUp duration={1.2}>
            <FullCollapse items={items} />
          </FadeInUp>
        </div>
        <div className="bg-gt-gradient-1 ">2</div>
      </div>
    </section>
  );
};

export { About };
