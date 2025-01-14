// base
import { FC } from "react";
// lib
import { motion } from "framer-motion";

interface IPropType {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}

const RightToLeftImg: FC<IPropType> = ({ children, className, duration }) => {
  return (
    <motion.div
      className={className}
      animate={{
        x: ["0%", "100%", "0%"], // حرکت به چپ و راست
      }}
      transition={{
        duration: duration, // مدت زمان حرکت
        repeat: Infinity, // تکرار حرکت
        repeatType: "loop", // تکرار به صورت حلقه
        ease: "easeInOut", // نوع انیمیشن
      }}
    >
      {children}
    </motion.div>
  );
};

export { RightToLeftImg };
