import React, { useEffect, useState } from "react";
import Input from "../../common/Input/Input";
import { useDebounce } from "../../../hooks/useDebounce";
import SearchIcon from "../../../styles/icons/SearchIcon";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  setFilteredUsers,
  setUsers,
  storeSelect,
} from "../../../store/slices/counterSlice";

const SearchUsers = () => {
  const [emailText, setEmailText] = useState("");
  const debouncedEmailText = useDebounce<string>(emailText, 500);
  const { users } = useAppSelector(storeSelect);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (emailText.length) {
      dispatch(
        setFilteredUsers(
          users.filter((user) =>
            user.email.toLowerCase().includes(debouncedEmailText.toLowerCase())
          )
        )
      );
    } else {
      dispatch(setFilteredUsers(users));
    }
  }, [debouncedEmailText, setUsers]);

  useEffect(() => {
    dispatch(setFilteredUsers(users));
  }, [users]);

  return (
    <Input
      value={emailText}
      changeValue={setEmailText}
      placeholder="Email search"
      icon={<SearchIcon />}
    />
  );
};

export default SearchUsers;
