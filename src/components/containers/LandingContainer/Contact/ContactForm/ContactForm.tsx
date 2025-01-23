// base
import React, { Suspense } from "react";

// lib
import { Button } from "antd";

// components
import { TitleLanding } from "#/src/components/common/TItleLanding/TitleLanding";
import { TextInput } from "@/components/common/Form/TextInput/TextInput";
// enum
import { dataTypePageEnum } from "#/src/core/enums/dataTypePage.enum";

// css
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <Suspense>
      <section className="w-[80%] mx-auto my-12">
        <div>
          <TitleLanding
            className="mt-20 flex !justify-start text-base !text-white"
            className2="flex !justify-start text-[42px] text-white"
            title1="تماس با ما"
            title2="درتماس باش"
            dataType={dataTypePageEnum.contact}
          />
        </div>

        {/*input  */}
        <div className="grid sm:grid-cols-2 sm:gap-8">
          <div>
            <TextInput
              name="userName"
              placeholder="نام شما"
              allowClear
              classNames="border-b-white !border-b-2 border-solid rounded-none text-white mb-[33px] h-[50px] w-[100%]"
            />

            <TextInput
              name="email"
              placeholder="ایمیل شما"
              allowClear
              classNames="border-b-white !border-b-2 border-solid rounded-none  text-white mb-[33px] h-[50px] w-[100%]"
            />
          </div>

          <div className="">
            <TextInput
              name="phoneNumber"
              placeholder="موبایل"
              allowClear
              maxLength={11}
              classNames="border-b-white !border-b-2 border-solid rounded-none   text-white mb-[33px] h-[50px] w-[100%]"
            />
            <TextInput
              name="message"
              placeholder="پیام شما"
              allowClear
              classNames="border-b-white !border-b-2 border-solid rounded-none  text-white  mb-[33px] h-[50px] w-[100%]"
            />
          </div>
        </div>

        <div>
          <div>
            <TextInput
              name="textQuot"
              placeholder=" چه طور میتونم کمکت کنم ؟"
              allowClear
              classNames="border-b-white !border-b-2 border-solid  rounded-none  text-white mb-[33px] h-[50px] w-[100%]"
            />
          </div>
        </div>

        <div>
          <div>
            <Button
              className="bg-[#1a1b1d] text-white border-none text-[1.2rem] mt-8
                      font-extrabold py-[28px] px-[40px] rounded-[30px] transition-all duration-500 ease-in-out
                     hover:!bg-white hover:!text-black "
            >
              رزرو
            </Button>
          </div>
        </div>
      </section>
    </Suspense>
  );
};

export { ContactForm };
