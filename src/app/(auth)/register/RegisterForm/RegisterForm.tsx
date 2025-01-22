// lib
import Link from "next/link";

// common
import { TextInput } from "#/src/components/common/Form/TextInput/TextInput";
import { FullButton } from "#/src/components/common/Form/FullButton/FullButton";
import { FullCheckBox } from "#/src/components/common/Form/FullCheckBox/FullCheckBox";

// icon
import { MdEmail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { FaLock, FaUser } from "react-icons/fa";
// enum
import { dataTypePageEnum } from "#/src/core/enums/dataTypePage.enum";

import "./RegisterForm.css";

const RegisterForm = () => {
  return (
    <>
      <TextInput
        name="userName"
        placeholder="نام شما"
        allowClear
        classNames="mb-2"
        prefix={<FaUser className="" />}
      />
      <TextInput
        name="email"
        placeholder="ایمیل شما"
        allowClear
        classNames="mb-2"
        prefix={<MdEmail />}
      />
      <TextInput
        name="password"
        placeholder="پسورد"
        allowClear
        classNames="mb-2"
        prefix={<FaLock />}
      />
      <TextInput
        name="passwordConfirm"
        placeholder="تکرارپسورد"
        allowClear
        classNames="mb-2"
        prefix={<IoLockClosedOutline />}
      />

      <div className=" mx-8 mt-4 ">
        <FullCheckBox
          name="termsAndConditions"
          text="من با تمام اظهارات در شرایط موافقم"
        />
      </div>

      <div>
        <FullButton
          text="رزرو"
          className="mt-8 mb-4 flex justify-center"
          dataType={dataTypePageEnum.register}
        />
      </div>

      <div className="flex items-center justify-center mb-4">
        <span>
          <Link href="/login" className="text-white underline ">
            من عضویت دارم
          </Link>
        </span>
      </div>
    </>
  );
};

export default RegisterForm;
