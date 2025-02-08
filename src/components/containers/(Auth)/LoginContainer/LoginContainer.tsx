// base
import { FC } from "react";
// components
import { FullButton } from "#/src/components/common/Form/FullButton/FullButton";
import { TextInput } from "#/src/components/common/Form/TextInput/TextInput";
import { CheckBox } from "#/src/components/common/CheckBox/CheckBox";
// core
import { textInputType } from "#/src/core/enums/textInput-type.enum";
import { Button } from "antd";

interface IPropType {}

const LoginContainer: FC<IPropType> = () => {
  return (
    <section className="ml-4 md:ml-20 mr-4 md:mr-24">
      <h2 className="mb-8 text-3xl font-bold">ورود</h2>
      <TextInput
        name="userName"
        placeholder="نام شما"
        classNames="border-b-white h-[50px] w-[100%] !text-black"
      />
      <TextInput
        name="password"
        placeholder="پسورد"
        classNames="border-b-white h-[50px] w-[100%] !text-black"
        type={textInputType.password}
      />
      <CheckBox name="rememberCheck" className=" mb-6 mt-1" />
      <Button htmlType="submit">login</Button>
    </section>
  );
};

export { LoginContainer };
