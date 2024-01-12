import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import { Users } from "../../models/interfaces";
import { mockData } from "../../data/data";

interface UsersState {
  users: Users;
  filteredUsers: Users;
}

const initialState: UsersState = {
  users: mockData,
  filteredUsers: mockData,
};

export const counterSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<Users>) => {
      state.users = action.payload;
    },
    setFilteredUsers: (state, action: PayloadAction<Users>) => {
      state.filteredUsers = action.payload;
    },
  },
  selectors: {
    storeSelect: (state) => state,
  },
});

export const { setUsers, setFilteredUsers } = counterSlice.actions;
export const { storeSelect } = counterSlice.selectors;

export const selectCount = (state: RootState) => state.users;

export default counterSlice.reducer;
