// base
import { FC } from "react";
// lib
import { ErrorMessage } from "formik";

interface IFullErrorMessagePropType {
  name: string;
}

const FullErrorMessage: FC<IFullErrorMessagePropType> = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={(msg) => <div className="bg-red-600 text-[12px] m-1">{msg}</div>}
    />
  );
};

export { FullErrorMessage };
