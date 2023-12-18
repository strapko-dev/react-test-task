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
            img="https://s3-alpha-sig.figma.com/img/1736/1836/0dc56502b550c78282502b8b5bdce290?Expires=1703462400&Signature=FQcbfD7CFFc7ZWNZ6ErvuJj~k-XMqcKdrrcSZ9hKxhCH98AMDKFKYh7KAmhGOu9Bf9picSmMMXD-c2UX4-wmYwewKwTBu4d8nd-aZrFA~d6t34JT1wgx7580rxZt8IkIj9iTOxY2LQDR~wEpTHsiWIsVgmdWVj81T6JoFR87Thf3T~u7tSHI0jrUDFuUCgjN4i577tVloS5k1ROaHeNcTjCv0PXRjk1MlyCSRLsBRARYLEvgz2i5prsXQZitSQiHePe9hRJaBmC-4Yk2RC1tMPsHMeIGYbO5ieojZkJa2vBUfDYcGkf8k9LSb2ZbgOtL3yGSw5Gz4BQQ76pAGBTk6A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
