// icon
import { FaFacebookF, FaInstagram } from "react-icons/fa";

import img1 from "$/images/footer/fg1.png";
import img2 from "$/images/footer/fg2.png";
import img3 from "$/images/footer/fg3.png";
import img4 from "$/images/footer/fg4.png";

export interface IfooterLinkType {
  id: number;
  href: string;
  titleLink: string;
}

export type IfooterLinksGroupsType = IfooterLinkType[][];

export const footerLinksGroups: IfooterLinksGroupsType = [
  [
    { id: 1, href: "/", titleLink: "کار اخیر" },
    { id: 2, href: "/", titleLink: "گالری محصولات" },
    { id: 3, href: "/", titleLink: "درباره ما" },
    { id: 4, href: "/", titleLink: "گالری محصولات" },
  ],
  [
    { id: 1, href: "/", titleLink: "برندینگ" },
    { id: 2, href: "/", titleLink: "وب و تعاملی" },
    { id: 3, href: "/", titleLink: "کالای مارک دار" },
    { id: 4, href: "/", titleLink: "وب و تعاملی" },
  ],
  [
    { id: 1, href: "/", titleLink: "تاریخچه ما" },
    { id: 2, href: "/", titleLink: "کمک و پشتیبانی" },
    { id: 3, href: "/", titleLink: "جوایز ما" },
    { id: 4, href: "/", titleLink: "کمک و پشتیبانی" },
  ],
];

export interface ISocialNetworkType {
  id: number;
  href: string;
  titleLink: string;
  icon: React.ElementType;
}

export const SocialNetwork: ISocialNetworkType[] = [
  { id: 1, href: "/", titleLink: "فیسبوک", icon: FaFacebookF },
  { id: 2, href: "/", titleLink: " اینستاگرام", icon: FaInstagram },
];

export interface IImageFooterType {
  id: number;
  img: string;
  href: string;
}

export const imageFooter: IImageFooterType[] = [
  { id: 1, img: img1.src, href: "/" },
  { id: 2, img: img2.src, href: "/" },
  { id: 3, img: img3.src, href: "/" },
  { id: 4, img: img4.src, href: "/" },
];
