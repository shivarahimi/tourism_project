import { FC } from "react";

import { Button } from "antd";

// core
import { htmlTypeButtonEnum } from "#/src/core/enums/htmlTypeButton.enum";
import { BiSearch, BiTrash } from "react-icons/bi";

interface IFullButton {
  type?: "primary" | "dashed" | "link" | "text" | "default";
  shape?: "default" | "circle" | "round";
  size?: "large" | "middle" | "small";
  disabled?: boolean;

  htmlType?: htmlTypeButtonEnum;
  hasBaseBtn?: boolean;
  text: string;
  loading?: boolean;
  className?: string;
  icon?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;

  hasSearchBtn?: boolean;
  searchTextBtn?: string;
  searchHtmlTypeBtn?: htmlTypeButtonEnum;
  searchShapeBtn?: "default" | "circle" | "round";
  searchClassNameBtn?: string;
  searchLoadingBtn?: boolean;
  searchIcon?: boolean;
  searchOnClickBtn?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;

  hasClearBtn?: boolean;
  clearTextBtn?: string;
  clearHtmlTypeBtn?: htmlTypeButtonEnum;
  clearShapeBtn?: "default" | "circle" | "round";
  clearClassNameBtn?: string;
  clearLoadingBtn?: boolean;
  clearIcon?: boolean;
  clearOnClickBtn?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const FullButton: FC<IFullButton> = ({
  htmlType,
  type,
  size = "middle",
  disabled,

  hasBaseBtn,
  text,
  shape = "default",
  className,
  loading,
  icon,
  onClick,

  hasSearchBtn,
  searchTextBtn,
  searchHtmlTypeBtn,
  searchShapeBtn,
  searchClassNameBtn,
  searchLoadingBtn,
  searchIcon,
  searchOnClickBtn,

  hasClearBtn,
  clearTextBtn,
  clearHtmlTypeBtn,
  clearShapeBtn,
  clearClassNameBtn,
  clearLoadingBtn,
  clearIcon,
  clearOnClickBtn,
}) => {
  return (
    <section>
      {hasBaseBtn && (
        <Button
          htmlType={htmlType ? htmlType : htmlTypeButtonEnum.submit}
          type={type ? type : "default"}
          shape={shape}
          size={size}
          className={className}
          disabled={disabled}
          loading={loading}
          icon={icon}
          onClick={onClick}
        >
          {text}
        </Button>
      )}

      {hasSearchBtn && (
        <Button
          htmlType={searchHtmlTypeBtn}
          type={type ? type : "primary"}
          shape={searchShapeBtn ? searchShapeBtn : "default"}
          className={searchClassNameBtn}
          loading={searchLoadingBtn}
          icon={searchIcon ? searchIcon : <BiSearch />}
          onClick={searchOnClickBtn}
        >
          {searchTextBtn ? searchTextBtn : "جستجو کردن"}
        </Button>
      )}

      {hasClearBtn && (
        <Button
          htmlType={clearHtmlTypeBtn}
          type={type ? type : "dashed"}
          shape={clearShapeBtn ? clearShapeBtn : "default"}
          className={`px-4  ${clearClassNameBtn}`}
          loading={clearLoadingBtn}
          icon={clearIcon ? clearIcon : <BiTrash />}
          onClick={clearOnClickBtn}
        >
          {clearTextBtn ? clearTextBtn : "پاک کردن"}
        </Button>
      )}
    </section>
  );
};

export { FullButton };
