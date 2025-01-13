// img
import blog1 from "$/images/articlesNews/blog1.png";
import blog2 from "$/images/articlesNews/blog2.png";

export interface IArticlesNewsType {
  id: number;
  image: string;
  date: string;
  title: string;
  author: string;
  view: string;
  shortContent: string;
}

export const ArticlesNewsData: IArticlesNewsType[] = [
  {
    id: 1,
    image: blog1.src,
    date: "28 اسفند",
    title: "روزهای ساحلی، پیاده روی طولانی، و",
    author: "توسط ادمین",
    view: "1",
    shortContent:
      " از این مزیت برای پیچاندن محدودیت های ترس رها نباشید. او اکنون در خانه ای در میان ناکجاآباد زندگی می",
  },
  {
    id: 2,
    image: blog2.src,
    date: "09 فروردین",
    title: "جزیره پرش و نکات آب و هوا",
    author: "توسط ادمین",
    view: "0",
    shortContent:
      "از این مزیت برای پیچاندن محدودیت های ترس رها نباشید. او اکنون در خانه ای در میان ناکجاآباد زندگی می",
  },
];
