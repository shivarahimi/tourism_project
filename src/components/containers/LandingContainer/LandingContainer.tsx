// base
import { FC } from "react";

// components
import { Intro } from "./Intro/Intro";
import { ToolsBar } from "./ToolsBar/ToolsBar";
import { Discover } from "./Discover/Discover";
import { FavoriteTour } from "./FavoriteTour/FavoriteTour";
import { PopularVideos } from "./PopularVideos/PopularVideos";
import ArticlesAndNewsList from "./ArticlesAndNewsList/ArticlesAndNewsList";

// type
import { dataTypePageEnum } from "#/src/core/enums/dataTypePage.enum";

const LandingContainer: FC = () => {
  return (
    <section>
      {/* <Intro /> */}
      <ToolsBar dataType={dataTypePageEnum.toolsBar} />
      <Discover />
      <FavoriteTour />
      <PopularVideos dataType={dataTypePageEnum.popularVideos} />
      <ArticlesAndNewsList />
    </section>
  );
};

export { LandingContainer };
