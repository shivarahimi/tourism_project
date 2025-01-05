// data.ts
import image1 from "$/images/landing/ToolsBar/image1.png";
import image2 from "$/images/landing/ToolsBar/image2.png";
import image3 from "$/images/landing/ToolsBar/image3.png";

export interface IFeatureItemDataType {
  title: string;
  desc: string;
  image: string;
}

export const FeatureItemData: Record<string, IFeatureItemDataType[]> = {
  toolsBar: [
    {
      title: "قایق سواری درآب سفید",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
      image: image1.src,
    },
    {
      title: "رزرو آسان و سریع",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
      image: image2.src,
    },
    {
      title: "رزرو آسان و سریع",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
      image: image3.src,
    },
  ],
  popularVideos: [
    {
      title: "مقصد محبوب",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
      image: image1.src,
    },
    {
      title: "از سفر لذت ببرید",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
      image: image2.src,
    },
    {
      title: "بدون زحمت-رایگان",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
      image: image3.src,
    },
  ],
};
