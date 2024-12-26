// base
import { FC } from "react";
import { headerMenuList } from "@/core/data/HeaderMenu/HeaderMenu.data";
import { BsSearch } from "react-icons/bs";
import { HeaderResponsive } from "./HeaderResponsive/HeaderResponsive";

interface IPropType {}

const Headers: FC<IPropType> = () => {
  return (
    <header className="bg-gray-800 text-white">
      <section className="flex items-center justify-between w-[90%] mx-auto">
        <section className="flex items-center justify-start">
          <div className="md:hidden cursor-pointer">
            <HeaderResponsive />
          </div>
          <div className="bg-gt-gradient-1">logo</div>
        </section>

        <ul className="hidden md:flex md:items-center md:justify-center gap-3">
          {headerMenuList.map((item) => (
            <>
              <li key={item.key}>{item.title}</li>
            </>
          ))}
        </ul>

        <section>
          <div className="hidden md:block bg-gt-gradient-1 rounded-[40px] p-5">
            <BsSearch />
          </div>
        </section>
      </section>
    </header>
  );
};

export { Headers };
