import React from "react";
import styles from "./DesktopSideBar.module.scss";
import LogoIcon from "../../../../styles/icons/LogoIcon";
import { HeaderLink } from "../../../../models/interfaces";

interface DesktopSideBarProps {
  data: HeaderLink[];
}

const DesktopSideBar = ({ data }: DesktopSideBarProps) => {
  return (
    <div className={styles["desktopSideBar"]}>
      <a href="/">
        <LogoIcon />
      </a>

      <img
        src="https://s3-alpha-sig.figma.com/img/1736/1836/0dc56502b550c78282502b8b5bdce290?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RwTGSkrTkN~y7~13OQOMW7HsHN2jJLAKObsiPyJ0R9tz3YlHkQ-IAXHsHQCSPas4LlzfkoihK4~P7jefozncruatPcMSS4hgpR7j~qY9~ES3DVFDD4n2LBp1T7tgtn9BggapX1WNtzAQJlL61xZh0SOCvLwT8JDU7AnAddP5YUz6tYqODAHOdDdvks0qlgIYLCPiOO3n8~g7b~aBxDlSgm~1d~6rz18KY3XWS7aL0AJPZGViaKt1UrudcE4Ni9xpmsnY4X~Nyfpatflg2eYojma95JsyRi~rAKcfDvyfjoDmFHwbEA4vOzDidi~Y7TunaywVmefMTZ8eAQlj8JEa9g__"
        alt="avatar"
        className={styles["desktopSideBarImage"]}
        width={60}
        height={60}
      />

      <div className={styles["desktopSideBarLinksWrap"]}>
        {data.map((link, i) => (
          <a
            key={link.name + i}
            href={link.href}
            className={styles["desktopSideBarLink"]}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default DesktopSideBar;
