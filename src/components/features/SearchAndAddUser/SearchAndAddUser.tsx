import React from "react";
import styles from "./SearchAndAddUser.module.scss";
import { Users } from "../../../models/interfaces";
import SearchUsers from "../SearchUsers/SearchUsers";
import AddUsers from "../AddUsers/AddUsers";
import useWindowWidth from "../../../hooks/useWindowWidth";

interface SearchAndAddUserProps {
  title: string;
  users: Users;
  setUsers: React.Dispatch<React.SetStateAction<Users>>;
  setFilteredUsers: React.Dispatch<React.SetStateAction<Users>>;
}

const SearchAndAddUser = ({
  title,
  users,
  setUsers,
  setFilteredUsers,
}: SearchAndAddUserProps) => {
  const width = useWindowWidth();

  return (
    <div className={styles["searchAndAddUser"]}>
      {width > 1024 && (
        <h1 className={styles["searchAndAddUserTitle"]}>{title}</h1>
      )}
      <div className={styles["searchAndAddUserWrap"]}>
        <SearchUsers users={users} setUsers={setFilteredUsers} />
        <AddUsers setUsers={setUsers} />
      </div>
    </div>
  );
};

export default SearchAndAddUser;
