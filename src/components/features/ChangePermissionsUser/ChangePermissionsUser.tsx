import React, { useState } from "react";
import styles from "./ChangePermissionsUser.module.scss";
import { Permission } from "../../../models/interfaces";
import PopupWrapper from "../../common/PopupWrapper/PopupWrapper";
import PermissionsSelect from "../PermissionsSelect/PermissionsSelect";
import Button from "../../common/Button/Button";
import CrossIcon from "../../../styles/icons/CrossIcon";
import { setUsers, storeSelect } from "../../../store/slices/counterSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";

interface ChangePermissionsUserProps {
  email: string;
}

const ChangePermissionsUser = ({ email }: ChangePermissionsUserProps) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const { users } = useAppSelector(storeSelect);
  const dispatch = useAppDispatch();

  const onSubmit = () => {
    const permissionsStrings = permissions.map((perm) => perm.label);
    dispatch(
      setUsers(
        users.map((user) => {
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
      )
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
        Change permissons
      </button>
      {isOpenPopup && (
        <PopupWrapper setIsOpen={setIsOpenPopup}>
          <div className={styles["change"]}>
            <div className={styles["changeTitle"]}>Change permissons</div>
            <div className={styles["changeText"]}>
              Email: <span>{email}</span>
            </div>
            <div className={styles["changeWrap"]}>
              <PermissionsSelect
                permissions={permissions}
                setPermissions={setPermissions}
              />
              <Button onClick={onSubmit} className={styles["changeButton"]}>
                Change permissons
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
