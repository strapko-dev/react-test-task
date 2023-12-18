import React from "react";
import styles from "./Divider.module.scss";
import cn from "classnames";

interface DividerProps {
  className?: string;
}

const Divider = ({ className }: DividerProps) => {
  return <div className={cn(styles["divider"], className)} />;
};

export default Divider;
