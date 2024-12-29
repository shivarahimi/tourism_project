// base
import { FC } from "react";
import { ToolsBar } from "./ToolsBar/ToolsBar";
import { Discover } from "./Discover/Discover";

interface IPropType {}

const LandingContainer: FC<IPropType> = () => {
  return (
    <section>
      <ToolsBar />
      <Discover />
    </section>
  );
};

export { LandingContainer };
