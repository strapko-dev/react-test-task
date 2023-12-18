import React, { useState } from "react";
import Button from "../../common/Button/Button";
import { Permission, Users } from "../../../models/interfaces";
import PopupWrapper from "../../common/PopupWrapper/PopupWrapper";
import styles from "./AddUsers.module.scss";
import Input from "../../common/Input/Input";
import CrossIcon from "../../../styles/icons/CrossIcon";
import PermissionsSelect from "../PermissionsSelect/PermissionsSelect";

interface AddUsersProps {
  setUsers: React.Dispatch<React.SetStateAction<Users>>;
}

const AddUsers = ({ setUsers }: AddUsersProps) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [permissions, setPermissions] = useState<Permission[]>([]);

  const onSubmit = () => {
    const permissionsStrings = permissions.map((perm) => perm.label);
    setUsers((prev) => [
      {
        name: "Пользователь",
        email: email,
        permissions: permissionsStrings,
        image: require("../../../public/img/avatar.png"),
      },
      ...prev,
    ]);
    setIsOpenPopup(false);
    setEmail("");
    setPermissions([]);
  };

  return (
    <>
      <Button
        className={styles["popupButtonMain"]}
        onClick={() => setIsOpenPopup(true)}
      >
        Добавить пользователя
      </Button>
      {isOpenPopup && (
        <PopupWrapper setIsOpen={setIsOpenPopup}>
          <div className={styles["popup"]}>
            <div className={styles["popupText"]}>Отправьте приглашение</div>
            <div className={styles["popupWrap"]}>
              <Input
                value={email}
                changeValue={setEmail}
                placeholder="Email"
                className={styles["popupInput"]}
              />
              <PermissionsSelect
                permissions={permissions}
                setPermissions={setPermissions}
              />
              <Button onClick={onSubmit} className={styles["popupButton"]}>
                Отправить приглашение
              </Button>
            </div>
            <button
              className={styles["popupCross"]}
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

export default AddUsers;
