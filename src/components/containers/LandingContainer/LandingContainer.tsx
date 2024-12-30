// base
import { FC } from "react";
// components
import { Intro } from "./Intro/Intro";
import { ToolsBar } from "./ToolsBar/ToolsBar";
import { Discover } from "./Discover/Discover";
import { FavoriteTour } from "./FavoriteTour/FavoriteTour";
import { PopularVideos } from "./PopularVideos/PopularVideos";

interface IPropType {}

const LandingContainer: FC<IPropType> = () => {
  return (
    <section>
      <Intro />
      <ToolsBar />
      <Discover />
      <FavoriteTour />
      <PopularVideos />
    </section>
  );
};

export { LandingContainer };
