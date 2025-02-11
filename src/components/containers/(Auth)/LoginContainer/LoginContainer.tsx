// base
import { FC } from "react";
// components
// import { FullButton } from "#/src/components/common/Form/CustomeButton/CustomeButton";
import { TextInput } from "#/src/components/common/Form/TextInput/TextInput";
import { FullCheckBox } from "#/src/components/common/Form/FullCheckBox/FullCheckBox";

// core
import { dataTypePageEnum } from "#/src/core/enums/dataTypePage.enum";
import { textInputType } from "#/src/core/enums/textInput-type.enum";

const LoginContainer: FC = () => {
  return (
    <section className="flex flex-col items-start justify-start ml-4 md:ml-20 mr-4 md:mr-24">
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
      <FullCheckBox
        name="rememberCheck"
        text="مرا بخاطر بسپار"
        className=" mb-6 mt-1"
      />
      {/* <Button htmlType="submit">login</Button> */}
      {/* <FullButton
        text="ورود"
        className="mt-8 mb-4 flex justify-center"
        dataType={dataTypePageEnum.login}
      /> */}
      {/* <FullButton text="ورود" className="w-[80%] mt-8" /> */}
      {/* <CheckBox name="rememberCheck" className=" mb-6 mt-1" />
      <Button htmlType="submit">login</Button> */}
    </section>
  );
};

export { LoginContainer };
