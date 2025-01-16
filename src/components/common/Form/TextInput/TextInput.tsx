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
  autoFocus,
  variant = "borderless",

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
    <>
      <Input
        name={name}
        value={value ?? meta.value ?? undefined}
        autoComplete="off"
        type={textInputType.text}
        size={size}
        placeholder={placeholder}
        autoFocus={autoFocus}
        variant={variant}
        allowClear={allowClear}
        className={`${classNames} 
          ${
            !meta.error &&
            meta.touched &&
            !disabled &&
            "border border-solid border-green-500 "
          } ${
          meta.error && meta.touched && "border border-solid border-red-500 "
        } `}
        style={
          style || {
            color: "white",
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

          if (singleSpace) {
            inputValue = String(inputValue).replace(/\s+/g, " ");
          }

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

      <FullErrorMessage name={name} />
    </>
  );
};

export { TextInput };
