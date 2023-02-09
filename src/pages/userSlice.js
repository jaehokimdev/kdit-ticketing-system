import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLoading: false,
  error: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsersPending: (state) => {
      state.isLoading = true;
    },
    getUsersSuccess: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
      state.error = "";
    },
    getUsersFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { getUsersPending, getUsersSuccess, getUsersFail } =
  userSlice.actions;

export default userSlice.reducer;
