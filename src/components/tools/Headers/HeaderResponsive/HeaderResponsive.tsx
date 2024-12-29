// base
import { FullImage } from "#/src/components/common/FullImage/FullImage";
import { headerMenuList } from "#/src/core/data/HeaderMenu/HeaderMenu.data";
import { FC, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { BsXSquare } from "react-icons/bs";

interface IPropType {}

const HeaderResponsive: FC<IPropType> = () => {
  const defaultImage = "/images/landing/Headers/logo-2.png";
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <section>
      <section>
        <BiMenu size={25} onClick={() => setShowMenu(true)} />
      </section>
      {showMenu && (
        <section
          className="fixed top-0 left-0 w-screen h-screen bg-[#7d7d7d] opacity-60 z-50"
          onClick={() => setShowMenu(false)}
        ></section>
      )}
      <div className="fixed top-0 right-0 transition-all duration-300 z-50">
        {showMenu && (
          <section className="fixed top-0 right-0 w-80 h-[100vh] bg-[#0f0d0d] p-9 shadow-lg">
            <div className="flex items-center justify-between border-dashed border-b-2">
              <FullImage
                src={defaultImage}
                alt="عکس"
                width={150}
                height={150}
                className="p-5"
              />

              <BsXSquare
                size={20}
                className="text-red-500"
                onClick={() => setShowMenu(false)}
              />
            </div>
            <ul className=" ">
              {headerMenuList.map((item) => (
                <li key={item.key} className="p-3">
                  {item.title}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </section>
  );
};

export { HeaderResponsive };
