import React from "react";
import styles from "./Button.module.scss";
import cn from "classnames";

const Button = ({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={cn(styles["button"], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
