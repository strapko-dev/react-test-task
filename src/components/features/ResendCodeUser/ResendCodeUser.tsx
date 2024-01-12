import React, { useState } from "react";
import styles from "./ResendCodeUser.module.scss";
import PopupWrapper from "../../common/PopupWrapper/PopupWrapper";
import Button from "../../common/Button/Button";

interface ResendCodeUserProps {
  email: string;
}

const ResendCodeUser = ({ email }: ResendCodeUserProps) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpenPopup((prev) => !prev)}
        className={styles["resendField"]}
      >
        Resend code
      </button>
      {isOpenPopup && (
        <PopupWrapper setIsOpen={setIsOpenPopup}>
          <div className={styles["resend"]}>
            <div className={styles["resendTitle"]}>
              The invitation has been sent to {email}
            </div>
            <Button
              onClick={() => setIsOpenPopup(false)}
              className={styles["resendButton"]}
            >
              Close
            </Button>
          </div>
        </PopupWrapper>
      )}
    </>
  );
};

export default ResendCodeUser;
