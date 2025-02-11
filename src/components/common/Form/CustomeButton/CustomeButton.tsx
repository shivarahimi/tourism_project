// base
import Link from "next/link";
import { FC } from "react";

// css
import style from "./CustomeButton.module.css";

interface ICustomeButtonType {
  text: string;
  className: string;
  href?: string;
}

const CustomeButton: FC<ICustomeButtonType> = ({ text, className, href }) => {
  return (
    <div className={`${className} ${style.btn} rounded-[50px]`}>
      <Link href={href || "/"} className="bg-gt-gradient-1">
        <span className={`${style.textLink}`}>{text}</span>
      </Link>
    </div>
  );
};

export { CustomeButton };
