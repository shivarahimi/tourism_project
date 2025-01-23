"use client";
// base
import React, { useState, useEffect } from "react";
// lib
import { Button } from "antd";
import { FaAngleUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <Button
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
          }}
          className="!bg-gt-gradient-1 rounded-full !border-none"
          onClick={scrollToTop}
        >
          <FaAngleUp className="!text-white text-lg" />
        </Button>
      )}
    </div>
  );
};

export { ScrollToTopButton };
