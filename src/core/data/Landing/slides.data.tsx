// image
import img1 from "$/images/landing/PopularVideos/1.png";
import img2 from "$/images/landing/PopularVideos/2.png";
import img3 from "$/images/landing/PopularVideos/3.png";
import img4 from "$/images/landing/PopularVideos/4.png";
import img5 from "$/images/landing/PopularVideos/5.png";

export interface ISlidesListType {
  id: number;
  image: string;
  titleSlide: string;
}

export const slidesListData: ISlidesListType[] = [
  {
    id: 1,
    image: img1.src,
    titleSlide: "پمپاژ قلب",
  },
  {
    id: 2,
    image: img2.src,
    titleSlide: "پمپاژ قلب",
  },
  {
    id: 3,
    image: img3.src,
    titleSlide: "پمپاژ قلب",
  },
  {
    id: 4,
    image: img4.src,
    titleSlide: "پمپاژ قلب",
  },
  {
    id: 5,
    image: img5.src,
    titleSlide: "پمپاژ قلب",
  },
];
