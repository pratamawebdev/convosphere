import clsx from "clsx";
import React, { ReactNode } from "react";

interface CardBadgeProps {
  variant?: "primary" | "secondary" | "tertiary" | "quaternary";
  children: ReactNode;
}

const CardBadge: React.FC<CardBadgeProps> = (props) => {
  const { variant = "primary", children } = props;
  return (
    <span
      className={clsx([
        "rounded-[6px] px-[10px] py-1 text-[14px] font-medium w-fit",
        variant === "primary" && "bg-red-500 text-white",
        variant === "secondary" && "bg-green-500 text-white",
      ])}
    >
      {children}
    </span>
  );
};

export default CardBadge;
