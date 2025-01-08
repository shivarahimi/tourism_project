// components
import { TitleLanding } from "#/src/components/common/TItleLanding/TitleLanding";
import { ArticlesAndNewsCard } from "./ArticlesAndNewsCard/ArticlesAndNewsCard";

const ArticlesAndNewsList = () => {
  return (
    <>
      <TitleLanding
        className="mt-24"
        title1="برای تجربه جدید آماده شوید"
        title2="آخرین اخبار و مقالات"
      />

      <section className="mx-2 sm:mx-0">
        <ArticlesAndNewsCard />
      </section>
    </>
  );
};

export default ArticlesAndNewsList;
