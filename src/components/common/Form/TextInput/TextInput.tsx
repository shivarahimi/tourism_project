import React, { FC } from "react";
import { Input } from "antd";
import { useField, useFormikContext } from "formik";

import { textInputType } from "#/src/core/enums/textInput-type.enum";
// import "./TextInput.css";

import {
  convertToNumber,
  convertToPersianNumbers,
} from "#/src/core/hooks/PersianToEnglish";

// نوع‌های ورودی
interface ITextType {
  type?: textInputType.text;
}

interface IPasswordType {
  type?: textInputType.password;
}

// ویژگی‌های کامپوننت
interface ITextInputPropType {
  name: string;
  value?: string;
  size?: "middle" | "small" | "large";
  placeholder: string;
  variant?: "borderless" | "filled" | "outlined";
  isNumber?: boolean;
  singleSpace?: boolean;

  allowClear: boolean;
  classNames?: string | undefined;
  style?: React.CSSProperties;
  showCount?: boolean;
  disabled?: boolean;
  maxLength?: number;
  onChange?: (val: string | number) => void;

  addonAfter?: React.ReactNode;
  addonBefore?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

type ICombinedPageType = ITextInputPropType & (ITextType | IPasswordType);

const TextInput: FC<ICombinedPageType> = ({
  name,
  value,
  size = "large",
  placeholder,
  variant = "borderless",
  isNumber,
  singleSpace = true,
  allowClear,
  classNames,
  style,
  showCount = false,
  disabled = false,
  maxLength = 200,
  onChange,
  addonAfter,
  addonBefore,
  prefix,
  suffix,
}) => {
  const [field, meta] = useField({ name });
  const { setFieldValue } = useFormikContext();

  return (
    <Input
      name={name}
      value={
        isNumber
          ? convertToNumber(value ? value : meta.value).pureValue
          : value
          ? value
          : meta.value
          ? meta.value
          : undefined
      }
      type={textInputType.text}
      size={size}
      placeholder={placeholder}
      variant={variant}
      allowClear={allowClear}
      className={`!border-b-2 !border-solid !border-white h-[40px] text-base mb-[33px] bg-transparent
        font-semibold text-white w-full !border-t-0 !border-l-0 !border-r-0 rounded-none
        ${classNames}`}
      style={
        style || {
          color: "white",
          backgroundColor: "red",
        }
      }
      showCount={showCount}
      disabled={disabled}
      maxLength={maxLength}
      onChange={(
        param: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        let inputValue = param.target.value;

        inputValue = convertToPersianNumbers(inputValue);

        // inputValue = inputValue.replace(/[^0-9]/g, "");

        // if (inputValue.length > 11) {
        //   inputValue = inputValue.slice(0, 11);
        // }

        setFieldValue(name, inputValue);

        if (onChange) {
          onChange(inputValue);
        }
      }}
      addonAfter={addonAfter}
      addonBefore={addonBefore}
      prefix={prefix}
      suffix={suffix}
    />
  );
};

export { TextInput };
