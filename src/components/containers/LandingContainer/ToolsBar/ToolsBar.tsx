// base
import { FC } from "react";

// src
import {
  IToolsBarListData,
  ToolsBarListData,
} from "#/src/components/core/data/Landing/Toolbar.data";
import Image from "next/image";

interface IPropType {}

const ToolsBar: FC<IPropType> = () => {
  // data
  const data = ToolsBarListData();
  return (
    <section>
      <div className="grid grid-cols-3 gap-4 bg-red-200 p-4">
        {data.map((item: IToolsBarListData, index: number) => (
          <div key={index} className="flex items-center justify-center p-4">
            <div className="mr-4">
              <h3 className="text-2xl font-extrabold p-2 text-right">
                {item.title}
              </h3>
              <p className="leading-6 text-right w-60">{item.desc}</p>
            </div>
            <div className="w-[90px] h-[90px] bg-white rounded-[4.5rem] m-auto flex justify-center items-center">
              <Image src={item.image} alt="عکس" width={40} height={40} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export { ToolsBar };
