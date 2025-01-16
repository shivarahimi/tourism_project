// base
import Link from "next/link";
import { FC } from "react";

// css
import style from "./FullButton.module.css";

interface IFullButtonType {
  text: string;
  className: string;
  href?: string;
}

const FullButton: FC<IFullButtonType> = ({ text, className, href }) => {
  return (
    <div className={`${className} ${style.btn}`}>
      <Link href={href || "/"} className="bg-gt-gradient-1">
        <span className={style.textLink}>{text}</span>
      </Link>
    </div>
  );
};

export { FullButton };
