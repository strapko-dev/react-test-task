import React from "react";
import styles from "./UsersList.module.scss";
import { Users } from "../../../models/interfaces";
import UserCard from "../UserCard/UserCard";

interface UsersListProps {
  data: Users;
  setUsers: React.Dispatch<React.SetStateAction<Users>>;
}

const UsersList = ({ data, setUsers }: UsersListProps) => {
  return data.length ? (
    <div className={styles["usersListWrap"]}>
      {data.map((user, i) => (
        <UserCard key={user.email + i} data={user} setUsers={setUsers} />
      ))}
    </div>
  ) : (
    <div className={styles["usersListNotFound"]}>Пока нет пользователей</div>
  );
};

export default UsersList;
