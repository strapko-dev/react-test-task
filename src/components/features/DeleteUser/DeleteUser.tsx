import React, { useEffect, useState } from "react";
import styles from "./DeleteUser.module.scss";
import PopupWrapper from "../../common/PopupWrapper/PopupWrapper";
import Button from "../../common/Button/Button";
import { setUsers, storeSelect } from "../../../store/slices/counterSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";

interface DeleteUserProps {
  email: string;
}

const DeleteUser = ({ email }: DeleteUserProps) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isAlreadyOpened, setIsAlreadyOpened] = useState(false);
  const { users } = useAppSelector(storeSelect);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    setIsOpenPopup(true);
  };

  useEffect(() => {
    setIsAlreadyOpened(true);

    if (isOpenPopup === false && isAlreadyOpened === true) {
      dispatch(setUsers(users.filter((user) => user.email !== email)));
    }
  }, [isOpenPopup]);

  return (
    <>
      <button onClick={handleClick} className={styles["deleteField"]}>
        Delete
      </button>
      {isOpenPopup && (
        <PopupWrapper setIsOpen={setIsOpenPopup}>
          <div className={styles["delete"]}>
            <div className={styles["deleteTitle"]}>
              User has been successfully deleted
            </div>
            <Button
              onClick={() => setIsOpenPopup(false)}
              className={styles["deleteButton"]}
            >
              Close
            </Button>
          </div>
        </PopupWrapper>
      )}
    </>
  );
};

export default DeleteUser;
