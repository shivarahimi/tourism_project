// base
import React, { FC } from "react";
// lib
import { Input } from "antd";
import { useField, useFormikContext } from "formik";

// components
import { FullErrorMessage } from "../FullErrorMessage/FullErrorMessage";

// enum
import { textInputType } from "#/src/core/enums/textInput-type.enum";
// hooks
import { convertToPersianNumbers } from "#/src/core/hooks/PersianToEnglish";
// icon
import { FaEye, FaEyeSlash } from "react-icons/fa";

import "./TextInput.css";

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
  autoFocus?: boolean;
  variant?: "borderless" | "filled" | "outlined";
  type?: textInputType.text | textInputType.password;
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
  autoFocus,
  variant = "borderless",
  type = textInputType.text,

  singleSpace = true,
  allowClear,
  classNames,
  style,
  showCount = false,
  disabled = false,
  maxLength = 200,
  onChange,

  // ایکن ها
  addonAfter, //آیکن چپ و دورتر
  addonBefore, // آیکن راست و دورتر
  prefix, //راست و ایکن چسبیده
  suffix, //آِیکن چپ و جسبیده
}) => {
  const [field, meta] = useField({ name });
  const { setFieldValue } = useFormikContext();

  // handleChange
  const handleChange = (
    param: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let inputValue = param.target.value;

    inputValue = convertToPersianNumbers(inputValue);

    if (singleSpace) {
      inputValue = String(inputValue).replace(/\s+/g, " ");
    }

    setFieldValue(name, inputValue);

    if (onChange) {
      onChange(inputValue);
    }
  };

  const commonProps = {
    name,
    value: value ?? meta.value ?? undefined,
    autoComplete: "off",
    size,
    placeholder,
    autoFocus,
    variant,
    allowClear,
    className: `${classNames} 
    ${
      !meta.error &&
      meta.touched &&
      !disabled &&
      "border border-solid border-green-500"
    } 
    ${meta.error && meta.touched && "border border-solid border-red-500"}`,
    style: style || { color: "white" },
    showCount,
    disabled,
    maxLength,
    onChange: handleChange,

    addonAfter,
    addonBefore,
    prefix,
    suffix,
  };

  return (
    <>
      {type === textInputType.text ? (
        <Input {...commonProps} />
      ) : (
        <Input.Password
          {...commonProps}
          iconRender={(visible) => (visible ? <FaEye /> : <FaEyeSlash />)}
        />
      )}

      <FullErrorMessage name={name} />
    </>
  );
};

export { TextInput };
