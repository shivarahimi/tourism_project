// base
import React, { FC } from "react";
// lib
import { motion } from "framer-motion";

interface IPropType {
  children: React.ReactNode;
  delay?: number; // تأخیر انیمیشن
  duration?: number; // مدت زمان انیمیشن
  className?: string;
  animName?: string;
  repeatType?: "mirror" | "loop" | "reverse";
}

const Mover: FC<IPropType> = ({
  children,
  delay,
  duration,
  className = "",
  animName,
  repeatType = "loop",
}) => {
  return (
    <motion.div
      className={className}
      animate={{ y: ["0px", "-15px", "0px"] }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        repeatType: repeatType,
        animName: animName,
      }}
    >
      {children}
    </motion.div>
  );
};

export { Mover };
