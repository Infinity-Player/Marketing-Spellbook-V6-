import { ButtonHTMLAttributes, forwardRef } from "react"
import clsx from "clsx"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost"
  size?: "sm" | "md" | "lg"
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, ...props }, ref) => {
    const base = "rounded-xl font-medium focus:outline-none transition"

    const variants = {
      primary: "bg-indigo-600 text-white hover:bg-indigo-700",
      ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
    }

    const sizes = {
      sm: "px-3 py-1 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    }

    return (
      <button
        ref={ref}
        className={clsx(base, variants[variant], sizes[size], className)}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"
