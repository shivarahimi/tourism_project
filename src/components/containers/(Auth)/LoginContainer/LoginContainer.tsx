// base
import { FC } from "react";
// components
import { FullCheckBox } from "#/src/components/common/Form/FullCheckBox/FullCheckBox";
import { TextInput } from "#/src/components/common/Form/TextInput/TextInput";
import { FullButton } from "#/src/components/common/Form/FullButton/FullButton";

// core
import { textInputType } from "#/src/core/enums/textInput-type.enum";

const LoginContainer: FC = () => {
  return (
    <section className="flex flex-col items-start justify-start ml-4 md:ml-20 mr-4 md:mr-24">
      <h2 className="mb-8 text-3xl font-bold">ورود</h2>
      <TextInput
        name="userName"
        placeholder="نام شما"
        classNames="rounded-none  mb-2 textInput"
      />

      <TextInput
        name="password"
        placeholder="پسورد"
        classNames="rounded-none  mb-2 textInput"
        type={textInputType.password}
      />

      <FullCheckBox
        name="rememberCheck"
        text="مرا بخاطر بسپار"
        className=" mb-6 mt-1"
      />
      <FullButton
        text="ورود"
        className="mt-6 mr-2 px-8 py-6"
        hasBaseBtn
        type="primary"
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
