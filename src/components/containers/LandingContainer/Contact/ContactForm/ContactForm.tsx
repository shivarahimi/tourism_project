import { FullButton } from "#/src/components/common/FullButton/FullButton";
import { TitleLanding } from "#/src/components/common/TItleLanding/TitleLanding";
import { dataTypePageEnum } from "#/src/core/enums/dataTypePage.enum";
import { TextInput } from "@/components/common/Form/TextInput/TextInput";
import { Button } from "antd";

const ContactForm = () => {
  return (
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
      <div className="grid grid-cols-2 gap-8">
        <div>
          <TextInput name="userName" placeholder="نام شما" allowClear />
          <TextInput name="email" placeholder="ایمیل شما" allowClear />
        </div>

        <div className="">
          <TextInput
            name="phoneNumber"
            placeholder="موبایل"
            allowClear
            maxLength={11}
          />
          <TextInput name="message" placeholder="پیام شما" allowClear />
        </div>
      </div>

      <div>
        <div>
          <TextInput
            name="textQuot"
            placeholder=" چه طور میتونم کمکت کنم ؟"
            allowClear
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
  );
};

export { ContactForm };
