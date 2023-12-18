import React from "react";
import styles from "./Input.module.scss";
import cn from "classnames";

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  type?: string;
  value: string;
  changeValue: (arg1: string) => void;
  placeholder?: string;
  className?: string;
  icon?: React.ReactElement;
}

const Input = ({
  type = "text",
  value,
  changeValue,
  placeholder = "",
  className = "",
  icon,
  ...props
}: InputProps) => {
  return (
    <div className={styles["inputWrap"]}>
      <input
        type={type}
        value={value}
        onChange={(e) => changeValue(e.currentTarget.value)}
        placeholder={placeholder}
        className={cn(styles["input"], className)}
        {...props}
      />
      {icon && <div className={styles["inputIcon"]}>{icon}</div>}
    </div>
  );
};

export default Input;
