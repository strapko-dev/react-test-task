import React from "react";
import styles from "./ProfileBlock.module.scss";

interface ProfileBlockProps {
  img: string;
  name: string;
  position: string;
}

const ProfileBlock = ({ img, name, position }: ProfileBlockProps) => {
  return (
    <div className={styles["profileBlock"]}>
      <img src={img} alt="avatar" className={styles["profileBlockImage"]} />

      <div className={styles["profileBlockTextWrap"]}>
        <div className={styles["profileBlockName"]}>{name}</div>
        <div className={styles["profileBlockPosition"]}>{position}</div>
      </div>
    </div>
  );
};

export default ProfileBlock;
