import React, { useEffect, useState } from "react";
import styles from "./TeamPage.module.scss";
import { Users } from "../../models/interfaces";
import SearchAndAddUser from "../../components/features/SearchAndAddUser/SearchAndAddUser";
import Divider from "../../components/common/Divider/Divider";
import UsersList from "../../components/features/UsersList/UsersList";

interface TeamPageProps {
  title: string;
  data: Users;
}

const TeamPage = ({ title, data }: TeamPageProps) => {
  const [users, setUsers] = useState(data);
  const [filteredUsers, setFilteredUsers] = useState(data);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  return (
    <div className={styles["teamPageWrap"]}>
      <div className={styles["teamPage"]}>
        <SearchAndAddUser
          title={title}
          users={users}
          setUsers={setUsers}
          setFilteredUsers={setFilteredUsers}
        />
        <Divider className={styles["teamPageDivider"]} />
        <UsersList data={filteredUsers} setUsers={setUsers} />
      </div>
    </div>
  );
};

export default TeamPage;
