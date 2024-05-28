import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  ariaLabel?: string;
}

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { onClick, children, disabled, variant = "primary", ariaLabel } = props;
  return (
    <button
      onClick={onClick}
      className={clsx([
        "px-4 py-2 w-fit",
        variant === "primary" &&
          "bg-primary text-white font-semibold rounded-lg",
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
