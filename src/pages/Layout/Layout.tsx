import React from "react";
import SideBar from "../../components/features/SideBar/SideBar";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactElement;
  title: string;
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div className={styles["layout"]}>
      <SideBar title={title} />
      {children}
    </div>
  );
};

export default Layout;
