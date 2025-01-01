export interface IHeaderMenuList {
  key: string;
  title: string;
  href: string;
  exact?: boolean;
  subMenu?: any;
}

export const headerMenuList: IHeaderMenuList[] = [
  {
    key: "mainPage",
    title: "صفحه اصلی",
    href: "/",
    exact: true,
    subMenu: [
      { id: "1", title: "لینک ۱", href: "/link1" },
      { id: "2", title: "لینک ۲", href: "/link2" },
    ],
  },
  {
    key: "aboutUs",
    title: "درباره ما",
    href: "/about-us",
    subMenu: [
      { id: "1", title: "اطلاعات ۱", href: "/info1" },
      { id: "2", title: "اطلاعات ۲", href: "/info2" },
    ],
  },
  {
    key: "tour",
    title: "تور",
    href: "/tour",
    subMenu: [
      { id: "1", title: "تور", href: "/info1" },
      { id: "2", title: "جزئیات سفر", href: "/info2" },
    ],
  },
  {
    key: "pages",
    title: "صفحات",
    href: "/pages",
    subMenu: [
      { id: "1", title: "مقصد یک", href: "/info1" },
      { id: "2", title: "مقصد دو", href: "/info2" },
      { id: "3", title: "مقصد سه", href: "/info2" },
    ],
  },
  {
    key: "blog",
    title: "وبلاگ",
    href: "/blog",
    subMenu: [
      { id: "1", title: "وبلاگ", href: "/info1" },
      { id: "2", title: "وبلاگ تکی", href: "/info2" },
    ],
  },
];
