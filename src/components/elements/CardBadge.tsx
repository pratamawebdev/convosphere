import clsx from "clsx";
import React, { ReactNode } from "react";

interface CardBadgeProps {
  variant?: "primary" | "secondary" | "inActive" | "active";
  children: ReactNode;
  className?: string;
}

const CardBadge: React.FC<CardBadgeProps> = (props) => {
  const { variant = "primary", children, className } = props;
  return (
    <span
      className={clsx([
        "rounded-[6px] px-[10px] py-1 text-[14px] font-medium w-fit",
        variant === "inActive" && "bg-red-500 text-white",
        variant === "active" && "bg-green-500 text-white",
        variant === "primary" && "bg-primary text-white",
        variant === "secondary" && "bg-white text-primary",
        className,
      ])}
    >
      {children}
    </span>
  );
};

export default CardBadge;
