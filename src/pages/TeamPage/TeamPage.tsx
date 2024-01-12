import React from "react";
import styles from "./TeamPage.module.scss";
import SearchAndAddUser from "../../components/features/SearchAndAddUser/SearchAndAddUser";
import Divider from "../../components/common/Divider/Divider";
import UsersList from "../../components/features/UsersList/UsersList";

interface TeamPageProps {
  title: string;
}

const TeamPage = ({ title }: TeamPageProps) => {
  return (
    <div className={styles["teamPageWrap"]}>
      <div className={styles["teamPage"]}>
        <SearchAndAddUser title={title} />
        <Divider className={styles["teamPageDivider"]} />
        <UsersList />
      </div>
    </div>
  );
};

export default TeamPage;
