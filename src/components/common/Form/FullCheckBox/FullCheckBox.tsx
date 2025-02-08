//
import { FC } from "react";

// lib
import { Checkbox } from "antd";
import { useField, useFormikContext } from "formik";
import { CheckboxChangeEvent } from "antd/es/checkbox";

interface IFullCheckBoxType {
  name: string;
  checked?: boolean;
  text: string;
  autoFocus?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

const FullCheckBox: FC<IFullCheckBoxType> = ({
  name,
  checked,
  text,
  autoFocus = false,
  disabled = false,
  onChange,
  className,
}) => {
  const [meta] = useField({ name });
  const { setFieldValue } = useFormikContext();

  return (
    <Checkbox
      name={name}
      checked={checked ? checked : meta.value ? meta.value : undefined}
      autoFocus={autoFocus}
      disabled={disabled}
      className={className || ""}
      onChange={(param: CheckboxChangeEvent) => {
        const check: boolean = param.target.checked;

        setFieldValue(name, check);

        if (onChange) {
          onChange(check);
        }
      }}
    >
      {text}
    </Checkbox>
  );
};

export { FullCheckBox };
