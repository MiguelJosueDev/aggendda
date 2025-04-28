import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "default",
      size = "default",
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      "font-medium rounded-md focus:outline-none transition-colors";

    const variantStyles = {
      default: "bg-[#5C9DF1] text-white hover:bg-[#5C9DF1]/90",
      outline: "border border-slate-300 bg-transparent hover:bg-slate-100",
      ghost: "bg-transparent hover:bg-slate-100",
      link: "bg-transparent underline-offset-4 hover:underline text-slate-900 hover:bg-transparent",
    };

    const sizeStyles = {
      default: "h-10 px-4 py-2",
      sm: "h-9 px-3",
      lg: "h-11 px-8",
      icon: "h-10 w-10",
    };

    const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    return <button className={classes} ref={ref} {...props} />;
  },
);

Button.displayName = "Button";

export { Button };
