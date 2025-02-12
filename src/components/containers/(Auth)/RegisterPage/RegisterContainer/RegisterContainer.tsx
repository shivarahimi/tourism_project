// lib
import Link from "next/link";

// common
import { FullCheckBox } from "#/src/components/common/Form/FullCheckBox/FullCheckBox";
import { TextInput } from "#/src/components/common/Form/TextInput/TextInput";

// icon
import { IoLockClosedOutline } from "react-icons/io5";
import { FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// enum
import { dataTypePageEnum } from "#/src/core/enums/dataTypePage.enum";

import "./RegisterContainer.css";
import { FullButton } from "#/src/components/common/Form/FullButton/FullButton";

const RegisterContainer = () => {
  return (
    <>
      <TextInput
        name="userName"
        placeholder="نام شما"
        allowClear
        classNames="rounded-none  mb-2 textInput"
        prefix={
          <div className="flex items-center">
            <FaUser className="text-[#222]" />
          </div>
        }
      />
      <TextInput
        name="email"
        placeholder="ایمیل شما"
        allowClear
        classNames="rounded-none mb-2 textInput"
        prefix={
          <div className="flex items-center">
            <MdEmail className="text-[#222]" />
          </div>
        }
      />
      <TextInput
        name="password"
        placeholder="پسورد"
        allowClear
        classNames="rounded-none  mb-2 textInput"
        prefix={
          <div className="flex items-center">
            <FaLock className="text-[#222]" />
          </div>
        }
      />
      <TextInput
        name="passwordConfirm"
        placeholder="تکرارپسورد"
        allowClear
        classNames="rounded-none  mb-2 textInput"
        prefix={
          <div className="flex items-center">
            <IoLockClosedOutline className="text-[#222]" />
          </div>
        }
      />

      <div className=" mx-4 mt-4 ">
        <FullCheckBox
          name="termsAndConditions"
          text="من با تمام اظهارات در شرایط موافقم"
        />
      </div>

      <FullButton
        text=" ثبت نام "
        className="mt-6 mr-2 px-8 py-6"
        hasBaseBtn
        type="primary"
      />

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

export default RegisterContainer;
