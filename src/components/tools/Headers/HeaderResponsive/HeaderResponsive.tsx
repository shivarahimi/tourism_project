// base
import { FC } from "react";
import { BiMenu } from "react-icons/bi";

interface IPropType {}

const HeaderResponsive: FC<IPropType> = () => {
  return (
    <section>
      <section>
        <BiMenu />
      </section>
    </section>
  );
};

export { HeaderResponsive };
