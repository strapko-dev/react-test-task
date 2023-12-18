import React from "react";
import styles from "./Permission.module.scss";
import cn from "classnames";

interface PermissionProps {
  permission: string;
}

const Permission = ({ permission }: PermissionProps) => {
  return (
    <div
      className={cn(
        styles["permission"],
        permission === "Администратор" && styles["permissionMarked"]
      )}
    >
      {permission}
    </div>
  );
};

export default Permission;
