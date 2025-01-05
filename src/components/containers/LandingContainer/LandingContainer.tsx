// base
import { FC } from "react";
// components
import { ToolsBar } from "./ToolsBar/ToolsBar";
import { Discover } from "./Discover/Discover";
import { Intro } from "./Intro/Intro";

import { Button, DatePicker } from "antd";
import { ExploreEvent } from "./ExploreEvent/ExploreEvent";

interface IPropType {}

const LandingContainer: FC<IPropType> = () => {
  return (
    <section>
      {/* <Intro /> */}
      <ToolsBar />
      <Discover />
      <ExploreEvent />
    </section>
  );
};

export { LandingContainer };
