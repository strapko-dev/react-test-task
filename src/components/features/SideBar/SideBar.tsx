import React from "react";
import styles from "./SideBar.module.scss";
import useWindowWidth from "../../../hooks/useWindowWidth";
import DesktopSideBar from "./DesktopSideBar/DesktopSideBar";
import MobileSideBar from "./MobileSideBar/MobileSideBar";

import UnionIcon from "../../../styles/icons/UnionIcon";
import ProfileIcon from "../../../styles/icons/ProfileIcon";
import ListIcon from "../../../styles/icons/ListIcon";
import MessageIcon from "../../../styles/icons/MessageIcon";
import GaleryIcon from "../../../styles/icons/GaleryIcon";
import GroupIcon from "../../../styles/icons/GroupIcon";
import DocumentIcon from "../../../styles/icons/DocumentIcon";
import DollarIcon from "../../../styles/icons/DollarIcon";
import LogoutIcon from "../../../styles/icons/LogoutIcon";
import CoinsIcon from "../../../styles/icons/CoinsIcon";

interface SideBarProps {
  title: string;
}

const iconsList = [
  {
    name: "Аналитика",
    icon: <UnionIcon />,
    href: "#",
  },
  {
    name: "Профиль",
    icon: <ProfileIcon />,
    href: "#",
  },
  {
    name: "Модерация",
    icon: <ListIcon />,
    href: "#",
  },
  {
    name: "Чаты",
    icon: <MessageIcon />,
    href: "#",
  },
  {
    name: "Баннеры",
    icon: <GaleryIcon />,
    href: "#",
  },
  {
    name: "Команда",
    icon: <GroupIcon />,
    href: "#",
  },
  {
    name: "Блог",
    icon: <DocumentIcon />,
    href: "#",
  },
  {
    name: "Курс валют",
    icon: <DollarIcon />,
    href: "#",
  },
  {
    name: "Баланс",
    icon: <CoinsIcon />,
    href: "#",
  },
  {
    name: "Выйти",
    icon: <LogoutIcon />,
    href: "#",
  },
];

const SideBar = ({ title }: SideBarProps) => {
  const width = useWindowWidth();

  return (
    <div className={styles["sideBar"]}>
      {width > 1024 ? (
        <DesktopSideBar data={iconsList} />
      ) : (
        <MobileSideBar title={title} data={iconsList} />
      )}
    </div>
  );
};

export default SideBar;
