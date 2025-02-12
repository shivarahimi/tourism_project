import RegisterPage from "#/src/components/containers/(Auth)/RegisterPage/RegisterPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ثبت نام | گردشگری",
  description: "ثبت نام | گردشگری",
};

const Register = () => {
  return <RegisterPage />;
};

export default Register;
