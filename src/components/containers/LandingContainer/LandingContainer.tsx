// base
import { FC } from "react";
// components
import { ToolsBar } from "./ToolsBar/ToolsBar";
import { Intro } from "./Intro/Intro";

interface IPropType {}

const LandingContainer: FC<IPropType> = () => {
  return (
    <section>
      <Intro />
      <ToolsBar />
    </section>
  );
};

export { LandingContainer };
