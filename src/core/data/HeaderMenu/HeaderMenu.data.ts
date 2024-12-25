import { FaAngleDown } from "react-icons/fa";
// export interface IHeaderMenuList {
//   key: string;
//   title:string;
//   href: string;
//   exact?: boolean;
//   icon?: React.ElementType;
// }

export const headerMenuList = [
  {
    key: "mainPage",
    title: "صفحه اصلی",
    href: "/",
    exact: true,
  },
  {
    key: "aboutUs",
    title: "درباره ما",
    href: "/about-us",
    icon: FaAngleDown,
  },
  {
    key: "tour",
    title: "تور",
    href: "/tour",
  },
  {
    key: "pages",
    title: "صفحات",
    href: "/pages",
  },
  {
    key: "blog",
    title: "وبلاگ",
    href: "/blog",
  },
];
