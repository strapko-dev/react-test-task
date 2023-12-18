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
        src="https://s3-alpha-sig.figma.com/img/1736/1836/0dc56502b550c78282502b8b5bdce290?Expires=1703462400&Signature=FQcbfD7CFFc7ZWNZ6ErvuJj~k-XMqcKdrrcSZ9hKxhCH98AMDKFKYh7KAmhGOu9Bf9picSmMMXD-c2UX4-wmYwewKwTBu4d8nd-aZrFA~d6t34JT1wgx7580rxZt8IkIj9iTOxY2LQDR~wEpTHsiWIsVgmdWVj81T6JoFR87Thf3T~u7tSHI0jrUDFuUCgjN4i577tVloS5k1ROaHeNcTjCv0PXRjk1MlyCSRLsBRARYLEvgz2i5prsXQZitSQiHePe9hRJaBmC-4Yk2RC1tMPsHMeIGYbO5ieojZkJa2vBUfDYcGkf8k9LSb2ZbgOtL3yGSw5Gz4BQQ76pAGBTk6A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
