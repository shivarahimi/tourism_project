// base
import { FC } from "react";
// components
import { Intro } from "./Intro/Intro";
import { ToolsBar } from "./ToolsBar/ToolsBar";
import { Discover } from "./Discover/Discover";
import { FavoriteTour } from "./FavoriteTour/FavoriteTour";
import { PopularVideos } from "./PopularVideos/PopularVideos";

const LandingContainer: FC = () => {
  return (
    <section>
      <Intro />
      <ToolsBar dataType="toolsBar" />
      <Discover />
      <FavoriteTour />
      <PopularVideos dataType="popularVideos" />
    </section>
  );
};

export { LandingContainer };
