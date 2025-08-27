import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
  size?: "sm" | "md";
};

export default function Button({ variant = "primary", size = "md", className, ...rest }: Props) {
  const base = "btn";
  const styles = variant === "primary" ? "btn-primary" : "btn-ghost";
  const sizes = size === "sm" ? "btn-sm" : "";
  return <button {...rest} className={`${base} ${styles} ${sizes}${className ? " " + className : ""}`} />;
}
