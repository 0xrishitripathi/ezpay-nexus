import { type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary/50",
    secondary:
      "bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary/50",
    outline:
      "border border-gray-300 bg-transparent hover:bg-gray-50 focus:ring-primary/50",
    ghost: "bg-transparent hover:bg-gray-100 focus:ring-gray-500/50",
  };

  const sizeClasses: Record<ButtonSize, string> = {
    sm: "text-xs px-2.5 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
