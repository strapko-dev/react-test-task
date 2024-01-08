import React, { useEffect, useState } from "react";
import Input from "../../common/Input/Input";
import { Users } from "../../../models/interfaces";
import { useDebounce } from "../../../hooks/useDebounce";
import SearchIcon from "../../../styles/icons/SearchIcon";

interface SearchUsersProps {
  users: Users;
  setUsers: React.Dispatch<React.SetStateAction<Users>>;
}

const SearchUsers = ({ users, setUsers }: SearchUsersProps) => {
  const [emailText, setEmailText] = useState("");
  const debouncedEmailText = useDebounce<string>(emailText, 500);

  useEffect(() => {
    if (emailText.length) {
      setUsers((prev) =>
        prev.filter((user) =>
          user.email.toLowerCase().includes(debouncedEmailText.toLowerCase())
        )
      );
    } else {
      setUsers(users);
    }
  }, [debouncedEmailText, setUsers]);

  return (
    <Input
      value={emailText}
      changeValue={setEmailText}
      placeholder="Поиск по Email"
      icon={<SearchIcon />}
    />
  );
};

export default SearchUsers;
