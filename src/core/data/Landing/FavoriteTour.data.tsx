// image
import img1 from "$/images/landing/FavoriteTour/fp2.jpg";
import img2 from "$/images/landing/FavoriteTour/fp1.jpg";
import img3 from "$/images/landing/FavoriteTour/fp3.jpg";
import img4 from "$/images/landing/FavoriteTour/fp4.jpg";
import img5 from "$/images/landing/FavoriteTour/fp5.jpg";

export interface IFavoriteTourListType {
  id: number;
  image: string;
  numbertour: string;
  titleTour: string;
}

export const favoriteTourListData: IFavoriteTourListType[] = [
  {
    id: 1,
    image: img1.src,
    numbertour: "5",
    titleTour: "مارهتن",
  },
  {
    id: 2,
    image: img2.src,
    numbertour: "8",
    titleTour: "اسپانیا",
  },
  {
    id: 3,
    image: img3.src,
    numbertour: "9",
    titleTour: "پارک بالی",
  },
  {
    id: 4,
    image: img4.src,
    numbertour: "3",
    titleTour: "پرلند",
  },
  {
    id: 5,
    image: img5.src,
    numbertour: "8",
    titleTour: "کتی لاین",
  },
];
