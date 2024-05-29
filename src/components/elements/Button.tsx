import clsx from "clsx";
import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  variant?: "primary" | "danger";
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    onClick,
    children,
    disabled,
    variant = "primary",
    ariaLabel,
    className,
    type = "button",
  } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx([
        "px-4 py-2 w-fit",
        variant === "primary" &&
          "bg-primary text-white font-semibold rounded-lg",
        variant === "danger" &&
          "bg-red-500 text-white font-semibold rounded-lg",
        className,
      ])}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

const ButtonLink: React.FC<ButtonLinkProps> = (props) => {
  const { href, children, variant = "primary", ariaLabel } = props;
  return (
    <Link
      href={href}
      className={clsx([
        "px-4 py-2 w-fit",
        variant === "primary" &&
          "bg-primary text-white font-semibold rounded-lg",
      ])}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
};

export { Button, ButtonLink };
