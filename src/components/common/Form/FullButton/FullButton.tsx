// base
import Link from "next/link";
import { FC } from "react";

// css
import style from "./FullButton.module.css";
import { dataTypePageEnum } from "#/src/core/enums/dataTypePage.enum";

interface IFullButtonType {
  text: string;
  className: string;
  href?: string;
  dataType?: "register" | "login" | "auth";
}

const FullButton: FC<IFullButtonType> = ({
  text,
  className,
  href,
  dataType,
}) => {
  const register =
    dataType === dataTypePageEnum.register
      ? "bg-white !text-black !rounded-[4px]"
      : "bg-gt-gradient-1";

  const btnAuth = `${style.btn} ${
    dataType === dataTypePageEnum.auth ? "rounded-[4px]" : "rounded-[50px]"
  }`;

  const btnAuthtextLink =
    dataType === dataTypePageEnum.auth ? style.btnAuthtextLink : style.textLink;

  return (
    <div className={`${className} ${btnAuth}`}>
      <Link href={href || "/"} className={`${register}`}>
        <span className={`${btnAuthtextLink}`}>{text}</span>
      </Link>
    </div>
  );
};

export { FullButton };
