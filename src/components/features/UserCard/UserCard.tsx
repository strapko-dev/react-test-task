import React from "react";
import styles from "./UserCard.module.scss";
import { User, Users } from "../../../models/interfaces";
import Permission from "./Permission/Permission";
import UserCardDropdown from "./UserCardDropdown/UserCardDropdown";

interface UserCardProps {
  data: User;
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<Users>>;
}

const UserCard = ({ data, setUsers, users }: UserCardProps) => {
  const { name, email, image, permissions } = data;

  return (
    <div className={styles["card"]}>
      <div className={styles["cardWrap"]}>
        <img
          src={image}
          alt="avatar"
          className={styles["cardImg"]}
          width={64}
          height={64}
        />
        <div className={styles["cardTextWrap"]}>
          <div className={styles["cardNameWrap"]}>
            <div className={styles["cardName"]}>{name}</div>
            {name === "Пользователь" && (
              <div className={styles["cardUnknown"]}>Не авторизован</div>
            )}
            <div className={styles["cardEmail"]}>{email}</div>
          </div>
          <div className={styles["cardPermissionsWrap"]}>
            {permissions.map((perm, i) => (
              <Permission key={perm + i} permission={perm} />
            ))}
          </div>
        </div>
      </div>
      <UserCardDropdown users={users} email={email} setUsers={setUsers} />
    </div>
  );
};

export default UserCard;
