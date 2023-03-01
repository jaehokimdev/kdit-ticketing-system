import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers, getAllAccounts, getUser, getAccount } from "./userThunk";

const initialState = {
  users: [],
  accounts: [],
  user: [
    {
      user_id: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      role_id: "",
    },
  ],
  account: [
    {
      account_id: "",
      client_id: "",
      acctype_id: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
  ],
  account_type: "",
  status: "loading",
  usererror: "",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.user = payload;
    },
    setLogoutUser(state) {
      state.user = initialState.user;
      state.account = initialState.account;
      state.account_type = initialState.account_type;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
      state.status = "done";
      state.users = payload.data;
    });
    builder.addCase(getAllUsers.rejected, (state, { payload }) => {
      state.status = "error";
      state.usererror = payload;
    });
    builder.addCase(getAllAccounts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getAllAccounts.fulfilled, (state, { payload }) => {
      state.status = "done";
      state.accounts = payload.data;
    });
    builder.addCase(getAllAccounts.rejected, (state, { payload }) => {
      state.status = "error";
      state.usererror = payload;
    });
    builder.addCase(getUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      state.status = "done";
      state.user = payload.data;
      state.account_type = payload.data[0].role_name;
    });
    builder.addCase(getUser.rejected, (state, { payload }) => {
      state.status = "error";
      state.usererror = payload;
    });
    builder.addCase(getAccount.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getAccount.fulfilled, (state, { payload }) => {
      state.status = "done";
      state.account = payload.data;
      state.account_type = payload.data[0].acctype_name;
    });
    builder.addCase(getAccount.rejected, (state, { payload }) => {
      state.status = "error";
      state.usererror = payload;
    });
  },
});

export const userActions = userSlice.actions;
