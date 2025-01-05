"use client";

// base
import Image from "next/image";
import { FC } from "react";

interface IFUllImagePropType {
  src: string;
  alt: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  className?: string;
  objectFit?: "contain" | "cover" | "fill";
  style?: React.CSSProperties;
  quality?: number;
}

const FullImage: FC<IFUllImagePropType> = ({
  src,
  alt,
  width,
  height,
  className,
  objectFit,
  style,
  quality,
}) => {
  const defaultImage = "/images/general/img1.jpg";
  return (
    <>
      <Image
        src={src || defaultImage}
        alt={alt}
        width={width}
        height={height}
        className={` ${className}`}
        priority
        quality={quality}
        style={{
          objectFit: objectFit ? objectFit : "cover",
          ...(style ? style : {}),
        }}
      />
    </>
  );
};

export { FullImage };
