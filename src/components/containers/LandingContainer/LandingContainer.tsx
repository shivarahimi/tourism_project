// base
import { FC } from "react";
// components
import { ToolsBar } from "./ToolsBar/ToolsBar";
import { Discover } from "./Discover/Discover";
import { Intro } from "./Intro/Intro";

import { Button, DatePicker } from "antd";

interface IPropType {}

const LandingContainer: FC<IPropType> = () => {
  return (
    <section>
      <Intro />
      <ToolsBar />
      <Discover />
    </section>
  );
};

export { LandingContainer };
