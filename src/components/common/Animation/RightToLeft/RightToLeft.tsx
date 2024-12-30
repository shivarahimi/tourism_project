"use client";

// base
import { FC } from "react";
import { motion } from "framer-motion";

interface IPropType {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  animName?: string;
}

const RightToLeft: FC<IPropType> = ({
  children,
  delay = 0,
  duration,
  className,
  animName,
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: duration, delay: delay, ease: animName }}
    >
      {children}
    </motion.div>
  );
};

export { RightToLeft };
