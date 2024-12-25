// base
import React, { FC } from "react";

interface IPropType {
  children: React.ReactNode;
}

const CMSLayout: FC<IPropType> = ({ children }) => {
  return (
    <>
      <header>head</header>
      {children}
      <footer>footer</footer>
    </>
  );
};

export { CMSLayout };
