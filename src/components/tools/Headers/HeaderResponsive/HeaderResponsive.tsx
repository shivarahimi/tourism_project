// base
import { FC, useState } from "react";
// lib
import { BiMenu } from "react-icons/bi";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsXSquare,
  BsYoutube,
} from "react-icons/bs";
import { FaCaretDown, FaCaretLeft } from "react-icons/fa";
// components
import { FullImage } from "#/src/components/common/FullImage/FullImage";
// core
import {
  headerMenuList,
  ISubMenu,
} from "#/src/core/data/HeaderMenu/HeaderMenu.data";

interface IPropType {}

const HeaderResponsive: FC<IPropType> = () => {
  const defaultImage = "/images/landing/Headers/logo-2.png";
  const [showMenu, setShowMenu] = useState<boolean>(false);

  // کلید منوهای باز شده در اینجا ذخیره بشه
  // فیلتر برای حذف آیتم بسته شده از آرایه
  const [openSubmenus, setOpenSubmenus] = useState<string[]>([]);

  const toggleSubmenu = (key: string) => {
    setOpenSubmenus((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]
    );
  };

  return (
    <section>
      <section>
        <BiMenu size={30} onClick={() => setShowMenu(true)} />
      </section>
      {showMenu && (
        <section
          className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-90 opacity-60 z-50"
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
            <ul className="py-5">
              {headerMenuList.map((item) => (
                <li key={item.key} className="flex flex-col p-3">
                  <div className="flex items-center justify-between">
                    <div>{item.title}</div>
                    <div>
                      {openSubmenus.includes(item.key) ? (
                        <FaCaretDown
                          size={20}
                          onClick={() => toggleSubmenu(item.key)}
                        />
                      ) : (
                        <FaCaretLeft
                          size={20}
                          onClick={() => toggleSubmenu(item.key)}
                        />
                      )}
                    </div>
                  </div>

                  {openSubmenus.includes(item.key) && (
                    <ul>
                      {item.subMenu?.map((subItem: ISubMenu) => (
                        <li
                          key={subItem.id}
                          className="p-1 hover:underline hover:decoration-1 underline-offset-4 hover:underline-offset-2 transition-all duration-500"
                        >
                          {subItem.title}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-center gap-4 p-4 mt-4 ">
              <BsInstagram className="hover:text-purple-600" />
              <BsFacebook className="hover:text-purple-600" />
              <BsYoutube className="hover:text-purple-600" size={17} />
              <BsLinkedin className="hover:text-purple-600" />
            </div>
          </section>
        )}
      </div>
    </section>
  );
};

export { HeaderResponsive };
