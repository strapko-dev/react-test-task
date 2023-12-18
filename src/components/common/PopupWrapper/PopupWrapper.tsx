import React from "react";
import styles from "./PopupWrapper.module.scss";

interface PopupWrapperProps {
  children: React.ReactElement;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopupWrapper = ({ children, setIsOpen }: PopupWrapperProps) => {
  return (
    <div
      className={styles["popup"]}
      onClick={(e) => {
        setIsOpen(false);
      }}
    >
      <div
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        className={styles["popupContent"]}
      >
        {children}
      </div>
    </div>
  );
};

export default PopupWrapper;
