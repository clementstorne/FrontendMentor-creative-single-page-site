import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  const variantClasses = {
    primary: "bg-red hover:bg-red-hover",
    secondary: "bg-gray hover:bg-gray-hover",
  };

  return (
    <button
      className={clsx(
        variantClasses[variant],
        "text-white font-bold px-8.75 py-6.25",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
