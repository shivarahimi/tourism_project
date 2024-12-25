// base
import { FC } from "react";

interface IPropType {}

const Headers: FC<IPropType> = () => {
  return (
    <header>
      <section className="flex items-center justify-between">
        <section>logo</section>

        <ul>
          <li>menu</li>
        </ul>

        <section>search</section>
      </section>
    </header>
  );
};

export { Headers };
