import React, { useState } from "react";
import styles from "./UserCardDropdown.module.scss";
import ThreeDotsIcon from "../../../../styles/icons/ThreeDotsIcon";
import { Users } from "../../../../models/interfaces";
import ChangePermissionsUser from "../../ChangePermissionsUser/ChangePermissionsUser";
import ResendCodeUser from "../../ResendCodeUser/ResendCodeUser";
import DeleteUser from "../../DeleteUser/DeleteUser";

interface UserCardDropdownProps {
  email: string;
  setUsers: React.Dispatch<React.SetStateAction<Users>>;
}

const UserCardDropdown = ({ setUsers, email }: UserCardDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles["dropdown"]}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={styles["dropdownButton"]}
      >
        <ThreeDotsIcon />
      </button>
      {isOpen && (
        <>
          <div
            className={styles["dropdownContent"]}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <ChangePermissionsUser email={email} setUsers={setUsers} />
            <ResendCodeUser email={email} />
            <DeleteUser email={email} setUsers={setUsers} />
          </div>

          <div
            className={styles["dropdownWrap"]}
            onClick={() => setIsOpen(false)}
          ></div>
        </>
      )}
    </div>
  );
};

export default UserCardDropdown;
