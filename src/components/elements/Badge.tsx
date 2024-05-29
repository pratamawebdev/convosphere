import clsx from "clsx";
import React, { ReactNode } from "react";

interface BadgeProps {
  variant?: "primary" | "secondary" | "inactive" | "active";
  children: ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = (props) => {
  const { variant = "primary", children, className } = props;
  return (
    <span
      className={clsx([
        "rounded-[6px] px-[10px] py-1 text-[14px] font-medium w-fit",
        variant === "inactive" && "bg-red-500 text-white",
        variant === "active" && "bg-green-600 text-white",
        variant === "primary" && "bg-primary text-white",
        variant === "secondary" && "bg-white text-primary",
        className,
      ])}
    >
      {children}
    </span>
  );
};

export default Badge;
