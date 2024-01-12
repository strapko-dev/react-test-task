import React, { useState } from "react";
import Button from "../../common/Button/Button";
import { Permission } from "../../../models/interfaces";
import PopupWrapper from "../../common/PopupWrapper/PopupWrapper";
import styles from "./AddUsers.module.scss";
import Input from "../../common/Input/Input";
import CrossIcon from "../../../styles/icons/CrossIcon";
import PermissionsSelect from "../PermissionsSelect/PermissionsSelect";
import { setUsers, storeSelect } from "../../../store/slices/counterSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";

const AddUsers = () => {
  const [email, setEmail] = useState("");
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const { users } = useAppSelector(storeSelect);
  const dispatch = useAppDispatch();

  const onSubmit = () => {
    const permissionsStrings = permissions.map((perm) => perm.label);
    setIsOpenPopup(false);
    setEmail("");
    setPermissions([]);
    dispatch(
      setUsers([
        {
          name: "User",
          email: email,
          permissions: permissionsStrings,
          image: require("../../../public/img/avatar.png"),
        },
        ...users,
      ])
    );
  };

  return (
    <>
      <Button
        className={styles["popupButtonMain"]}
        onClick={() => setIsOpenPopup(true)}
      >
        Add user
      </Button>
      {isOpenPopup && (
        <PopupWrapper setIsOpen={setIsOpenPopup}>
          <div className={styles["popup"]}>
            <div className={styles["popupText"]}>Send an invitation</div>
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
                Send an invitation
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
