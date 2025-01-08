import React from "react";
import { FaCertificate, FaCheckCircle } from "react-icons/fa";

export interface ExploreEventDataType {
  title: string;
  info: string;
  desc: string;
  subData: subDataItem[];
}
interface subDataItem {
  id: number;
  title: string;
  icon: React.ReactNode;
}
export const ExploreEventData: Record<string, ExploreEventDataType> = {
  exploreEvent: {
    title: "کاوش رویداد",
    info: "شهرهای نفس گیر",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    subData: [
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
    ],
  },
  startJourney: {
    title: "کشف کردن",
    info: "سفر خود را شروع کنید",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    subData: [
      {
        id: 1,
        title: "فناوری نسل جدید",
        icon: <FaCheckCircle />,
      },
      {
        id: 2,
        title: "کارایی صوتی",
        icon: <FaCheckCircle />,
      },
    ],
  },
};
