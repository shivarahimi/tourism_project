// base
import { FC } from "react";

// components
import { ArticlesAndNewsList } from "./ArticlesAndNewsList/ArticlesAndNewsList";
import { Contact } from "./Contact/Contact";
import { Discover } from "./Discover/Discover";
import { ExploreEvent } from "./ExploreEvent/ExploreEvent";
import { FavoriteTour } from "./FavoriteTour/FavoriteTour";
import { PopularVideos } from "./PopularVideos/PopularVideos";
import { StartJourney } from "./StartJourney/StartJourney";
import { ToolsBar } from "./ToolsBar/ToolsBar";
// type
import { dataTypePageEnum } from "#/src/core/enums/dataTypePage.enum";
import { exploreEventTypeEnum } from "#/src/core/enums/exploreEventType.enum";

const LandingContainer: FC = () => {
  return (
    <section>
      <ToolsBar dataType={dataTypePageEnum.toolsBar} />
      <Discover />
      <StartJourney dataType={exploreEventTypeEnum.startJourney} />
      <ExploreEvent dataType={exploreEventTypeEnum.exploreEvent} />
      <FavoriteTour />
      <PopularVideos dataType={dataTypePageEnum.popularVideos} />
      <ArticlesAndNewsList />
      <Contact />
    </section>
  );
};

export { LandingContainer };
