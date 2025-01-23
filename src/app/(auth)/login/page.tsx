"use client";
// base
import { FC, useState } from "react";
import Link from "next/link";
// lib
import { Form, Formik } from "formik";
// components
import { FullImage } from "#/src/components/common/FullImage/FullImage";
import { LoginContainer } from "#/src/components/containers/(Auth)/LoginContainer/LoginContainer";
import { ILoginValues } from "#/src/core/types/Login/Login.values";

interface IPropType {}

const Login: FC<IPropType> = () => {
  const defaultImage = "/images/auth/login/signin-image.jpg";
  const [initialValues, setInitialValues] = useState<ILoginValues>({
    userName: "",
    password: "",
    rememberCheck: false,
  });
  const onSubmit = (values: ILoginValues) => {
    alert("hiiii");
    console.log("values", values);
  };
  return (
    <section className="bg-[#f8f8f8] lg:py-[50px] px-5 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white md:w-[900px] m-auto shadow-md py-20 rounded-3xl">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          // validationSchema={}
          enableReinitialize
        >
          {() => (
            <Form>
              <LoginContainer />
            </Form>
          )}
        </Formik>
        <div className="flex flex-col items-center justify-center mt-3 ml-0 md:ml-28 mr-0 md:mr-5">
          <FullImage
            src={defaultImage}
            alt="عکس"
            width={300}
            height={300}
            className="mb-12"
          />
          <Link href="" className="underline">
            ایجاد حساب کاربری
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
