"use client";

// base
import { useState } from "react";

// lib
import { Form, Formik } from "formik";

// components
import { FullImage } from "#/src/components/common/FullImage/FullImage";
import RegisterContainer from "#/src/components/containers/(Auth)/RegisterContainer/RegisterContainer";

// typse
import { IRegisterValues } from "#/src/core/types/Register/Register.values";
// image
import img1 from "$/images/auth/register/signup-image.jpg";

const Register = () => {
  const [initialValues, setInitialValues] = useState<IRegisterValues>({
    userName: "",
    email: "",
    password: "", //!
    passwordConfirm: "", //!
    termsAndConditions: false,
  });

  const onSubmit = (values: IRegisterValues) => {
    console.log("values", values);
  };

  return (
    <section className="bg-[#F7FBFF] lg:h-screen flex items-center justify-center py-8 lg:py-0">
      <div className="w-[90%] lg:w-[80%] mx-auto shadow-md rounded-2xl">
        <div className="grid lg:grid-cols-2  ">
          {/* formik */}
          <div className="bg-gt-gradient-1 rounded-tr-2xl  lg:rounded-br-2xl rounded-tl-2xl lg:rounded-tl-none ">
            <Formik
              initialValues={initialValues}
              enableReinitialize
              // validationSchema={}
              onSubmit={onSubmit}
            >
              {() => (
                <Form>
                  <h2 className="text-xl text-white font-bold text-center m-8">
                    ثبت نام
                  </h2>
                  <RegisterContainer />
                </Form>
              )}
            </Formik>
          </div>

          <div className=" bg-white flex justify-center rounded-tl-2xl  !rounded-bl-2xl p-16">
            <FullImage src={img1.src} alt="عکس" width={300} height={300} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
