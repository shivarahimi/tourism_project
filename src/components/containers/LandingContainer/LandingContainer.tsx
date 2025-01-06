// base
import { FC } from "react";

// components
import { Intro } from "./Intro/Intro";
import { ToolsBar } from "./ToolsBar/ToolsBar";
import { Discover } from "./Discover/Discover";
import { FavoriteTour } from "./FavoriteTour/FavoriteTour";
import { PopularVideos } from "./PopularVideos/PopularVideos";

import { Button, DatePicker } from "antd";
import { ExploreEvent } from "./ExploreEvent/ExploreEvent";
// type
import { dataTypePageEnum } from "#/src/core/enums/dataTypePage.enum";
import { StartJourney } from "./StartJourney/StartJourney";

const LandingContainer: FC = () => {
  return (
    <section>
      <ToolsBar dataType={dataTypePageEnum.toolsBar} />
      <Discover />
      <StartJourney />
      <ExploreEvent />
      <FavoriteTour />
      <PopularVideos dataType={dataTypePageEnum.popularVideos} />
    </section>
  );
};

export { LandingContainer };
