// base
import { Footer } from "@/components/tools/Footer/Footer";
import { Headers } from "@/components/tools/Headers/Headers";
import React, { FC } from "react";

interface IPropType {
  children: React.ReactNode;
}

const CMSLayout: FC<IPropType> = ({ children }) => {
  return (
    <>
      <Headers />
      <section>{children}</section>
      <Footer />
    </>
  );
};

export { CMSLayout };
