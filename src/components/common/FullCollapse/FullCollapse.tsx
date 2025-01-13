"use client";

import { Collapse } from "antd";
import { FC } from "react";
import { GoDash, GoPlus } from "react-icons/go";

import "./FullCollapse.css";

interface ITabItems {
  key: string | number;
  label: string | React.ReactNode;
  children: string | React.ReactNode;
  className?: string;
}

interface IFullCollapsePropType {
  items: ITabItems[];
  bordered?: boolean;
  accordion?: boolean;
  collapsible?: "header" | "icon" | "disabled";
  defaultActiveKey?: string[] | string | number[] | number;
  destroyInactivePanel?: boolean;
  expandIconPosition?: "start" | "end";
  ghost?: boolean;
  size?: "small" | "middle" | "large";
  onChange?: (activeKey: string[]) => void;
  className?: string;
}

const FullCollapse: FC<IFullCollapsePropType> = ({
  items,
  accordion = true,
  bordered = false,
  collapsible = "header",
  defaultActiveKey,
  destroyInactivePanel = true,
  expandIconPosition = "end",
  ghost = true,
  size,
  onChange,
  className,
}) => {
  return (
    <Collapse
      items={items}
      accordion={accordion} //just once open
      bordered={bordered}
      collapsible={collapsible}
      defaultActiveKey={defaultActiveKey || undefined}
      // destroyInactivePanel={true}

      expandIcon={({ isActive }) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "transform 0.3s ease-in", // انیمیشن چرخش
            transform: isActive
              ? "rotate(180deg)" //   پنل باز  (180 درجه چرخش)
              : "rotate(0deg)", //   پنل بسته
            transformOrigin: "center center",
          }}
        >
          {isActive ? (
            <GoDash className="text-[#6000f1] text-[1.2rem]" />
          ) : (
            <GoPlus className="text-[#6000f1] text-[1.2rem]" />
          )}
        </div>
      )}
      expandIconPosition={expandIconPosition}
      ghost={ghost} //حاشه حذف میشه ,بوردر حذف میشه
      size={size || "large"}
      onChange={onChange}
      className={className}
    />
  );
};

export { FullCollapse };
