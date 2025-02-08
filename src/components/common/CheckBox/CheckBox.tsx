// base
import { FC, useState } from "react";
import { Checkbox } from "antd";

interface IPropType {
  name: string;
  className?: string;
}

const CheckBox: FC<IPropType> = ({ name, className }) => {
  const [checked, setChecked] = useState(false);

  const onChange = (e: any) => {
    setChecked(e.target.checked);
  };
  return (
    <div>
      <Checkbox
        name={name}
        checked={checked}
        onChange={onChange}
        className={className}
      >
        مرا بخاطر بسپار
      </Checkbox>
      {/* <p>
        {checked
          ? "شما شرایط و قوانین را پذیرفته‌اید."
          : "شما شرایط و قوانین را نپذیرفته‌اید."}
      </p> */}
    </div>
  );
};

export { CheckBox };
