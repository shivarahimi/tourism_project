// components
import { FullImage } from "#/src/components/common/FullImage/FullImage";
// icon
import { FaArrowLeft } from "react-icons/fa";

// img
import img1 from "$/images/landing/about/fq1.png";

export const items = [
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
          <p className="text-[#504e4e]">هر لذتی قابل استقبال هست و هر دردی </p>
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
          <p className="text-[#504e4e]">هر لذتی قابل استقبال هست و هر دردی </p>
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
          <p className="text-[#504e4e] ">هر لذتی قابل استقبال هست و هر دردی</p>
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
