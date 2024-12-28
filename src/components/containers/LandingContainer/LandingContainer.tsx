// base
import { FC } from "react";
import { ToolsBar } from "./ToolsBar/ToolsBar";

interface IPropType {}

const LandingContainer: FC<IPropType> = () => {
  return (
    <section>
      <ToolsBar />
    </section>
  );
};

export { LandingContainer };
