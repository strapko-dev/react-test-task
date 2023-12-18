import React, { useEffect, useState } from "react";
import styles from "./DeleteUser.module.scss";
import { Users } from "../../../models/interfaces";
import PopupWrapper from "../../common/PopupWrapper/PopupWrapper";
import Button from "../../common/Button/Button";

interface DeleteUserProps {
  email: string;
  setUsers: React.Dispatch<React.SetStateAction<Users>>;
}

const DeleteUser = ({ email, setUsers }: DeleteUserProps) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isAlreadyOpened, setIsAlreadyOpened] = useState(false);

  const handleClick = () => {
    setIsOpenPopup(true);
  };

  useEffect(() => {
    setIsAlreadyOpened(true);

    if (isOpenPopup === false && isAlreadyOpened === true) {
      setUsers((prev) => prev.filter((user) => user.email !== email));
    }
  }, [isOpenPopup]);

  return (
    <>
      <button onClick={handleClick} className={styles["deleteField"]}>
        Удалить
      </button>
      {isOpenPopup && (
        <PopupWrapper setIsOpen={setIsOpenPopup}>
          <div className={styles["delete"]}>
            <div className={styles["deleteTitle"]}>
              Пользователь успешно удален
            </div>
            <Button
              onClick={() => setIsOpenPopup(false)}
              className={styles["deleteButton"]}
            >
              Закрыть
            </Button>
          </div>
        </PopupWrapper>
      )}
    </>
  );
};

export default DeleteUser;
