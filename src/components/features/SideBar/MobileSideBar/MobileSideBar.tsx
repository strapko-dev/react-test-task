import React, { useState } from "react";
import { HeaderLink } from "../../../../models/interfaces";
import styles from "./MobileSideBar.module.scss";
import SandwichIcon from "../../../../styles/icons/SandwichIcon";
import ProfileBlock from "../../../common/ProfileBlock/ProfileBlock";

interface MobileSideBarProps {
  data: HeaderLink[];
  title: string;
}

const MobileSideBar = ({ data, title }: MobileSideBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles["mobileSideBar"]}>
      <div className={styles["mobileSideBarWrap"]}>
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className={styles["mobileSideBarButton"]}
        >
          <SandwichIcon />
        </button>
        {!isMenuOpen && (
          <h1 className={styles["mobileSideBarTitle"]}>{title}</h1>
        )}
      </div>

      {isMenuOpen && (
        <div className={styles["mobileSideBarMenuWrap"]}>
          <ProfileBlock
            img="https://s3-alpha-sig.figma.com/img/1736/1836/0dc56502b550c78282502b8b5bdce290?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RwTGSkrTkN~y7~13OQOMW7HsHN2jJLAKObsiPyJ0R9tz3YlHkQ-IAXHsHQCSPas4LlzfkoihK4~P7jefozncruatPcMSS4hgpR7j~qY9~ES3DVFDD4n2LBp1T7tgtn9BggapX1WNtzAQJlL61xZh0SOCvLwT8JDU7AnAddP5YUz6tYqODAHOdDdvks0qlgIYLCPiOO3n8~g7b~aBxDlSgm~1d~6rz18KY3XWS7aL0AJPZGViaKt1UrudcE4Ni9xpmsnY4X~Nyfpatflg2eYojma95JsyRi~rAKcfDvyfjoDmFHwbEA4vOzDidi~Y7TunaywVmefMTZ8eAQlj8JEa9g__"
            name="Артем Иванов"
            position="Собственник"
          />

          <div className={styles["mobileSideBarLinksWrap"]}>
            {data.map((link, i) => (
              <a
                key={link.name + i}
                href={link.href}
                className={styles["mobileSideBarLink"]}
              >
                {link.icon}
                <div className={styles["mobileSideBarLinkText"]}>
                  {link.name}
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileSideBar;
