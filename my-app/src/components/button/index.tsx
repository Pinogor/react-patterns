import "./style.scss";
import React from "react";

interface ButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = "",
  type = "button",
  disabled = false,
  ...props
}) => {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
