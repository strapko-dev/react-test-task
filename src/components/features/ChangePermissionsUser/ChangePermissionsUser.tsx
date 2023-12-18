import React, { useState } from "react";
import styles from "./ChangePermissionsUser.module.scss";
import { Permission, Users } from "../../../models/interfaces";
import PopupWrapper from "../../common/PopupWrapper/PopupWrapper";
import PermissionsSelect from "../PermissionsSelect/PermissionsSelect";
import Button from "../../common/Button/Button";
import CrossIcon from "../../../styles/icons/CrossIcon";

interface ChangePermissionsUserProps {
  email: string;
  setUsers: React.Dispatch<React.SetStateAction<Users>>;
}

const ChangePermissionsUser = ({
  setUsers,
  email,
}: ChangePermissionsUserProps) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [permissions, setPermissions] = useState<Permission[]>([]);

  const onSubmit = () => {
    const permissionsStrings = permissions.map((perm) => perm.label);
    setUsers((prev) =>
      prev.map((user) => {
        if (user.email === email) {
          return {
            name: user.name,
            email: email,
            permissions: permissionsStrings,
            image: user.image,
          };
        } else {
          return user;
        }
      })
    );
    setIsOpenPopup(false);
    setPermissions([]);
  };

  return (
    <>
      <button
        onClick={() => setIsOpenPopup((prev) => !prev)}
        className={styles["changeField"]}
      >
        Изменить права доступа
      </button>
      {isOpenPopup && (
        <PopupWrapper setIsOpen={setIsOpenPopup}>
          <div className={styles["change"]}>
            <div className={styles["changeTitle"]}>Измените права доступа</div>
            <div className={styles["changeText"]}>
              Email: <span>{email}</span>
            </div>
            <div className={styles["changeWrap"]}>
              <PermissionsSelect
                permissions={permissions}
                setPermissions={setPermissions}
              />
              <Button onClick={onSubmit} className={styles["changeButton"]}>
                Изменить права доступа
              </Button>
            </div>
            <button
              className={styles["changeCross"]}
              onClick={() => setIsOpenPopup(false)}
            >
              <CrossIcon />
            </button>
          </div>
        </PopupWrapper>
      )}
    </>
  );
};

export default ChangePermissionsUser;
