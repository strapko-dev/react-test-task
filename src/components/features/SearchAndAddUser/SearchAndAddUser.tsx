import React from "react";
import styles from "./SearchAndAddUser.module.scss";
import SearchUsers from "../SearchUsers/SearchUsers";
import AddUsers from "../AddUsers/AddUsers";
import useWindowWidth from "../../../hooks/useWindowWidth";

interface SearchAndAddUserProps {
  title: string;
}

const SearchAndAddUser = ({ title }: SearchAndAddUserProps) => {
  const width = useWindowWidth();

  return (
    <div className={styles["searchAndAddUser"]}>
      {width > 1024 && (
        <h1 className={styles["searchAndAddUserTitle"]}>{title}</h1>
      )}
      <div className={styles["searchAndAddUserWrap"]}>
        <SearchUsers />
        <AddUsers />
      </div>
    </div>
  );
};

export default SearchAndAddUser;
