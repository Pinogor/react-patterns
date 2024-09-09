import { Button } from "../button";
import "./style.scss";
import React from "react";

interface ButtonWithLabelProps {
  onClick: () => void;
  children: React.ReactNode;
  label?: string;
  className?: string;
}

export const ButtonWithLabel: React.FC<ButtonWithLabelProps> = ({
  onClick,
  children,
  label = "нажми меня!",
  className = "",
  ...props
}) => {
  return (
    <div className={`button-with-label ${className}`} {...props}>
      {label && <p className="button-with-label-text">{label}</p>}
      <Button onClick={onClick}>{children}</Button>
    </div>
  );
};
