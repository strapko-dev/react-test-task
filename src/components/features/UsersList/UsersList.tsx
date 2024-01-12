import React from "react";
import styles from "./UsersList.module.scss";
import UserCard from "../UserCard/UserCard";
import { storeSelect } from "../../../store/slices/counterSlice";
import { useAppSelector } from "../../../hooks/redux";

const UsersList = () => {
  const { filteredUsers } = useAppSelector(storeSelect);

  return filteredUsers.length ? (
    <div className={styles["usersListWrap"]}>
      {filteredUsers.map((user, i) => (
        <UserCard key={user.email + i} data={user} />
      ))}
    </div>
  ) : (
    <div className={styles["usersListNotFound"]}>Пока нет пользователей</div>
  );
};

export default UsersList;
