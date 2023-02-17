import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers, getUser } from "./userThunk";

const initialState = {
  users: [],
  user: {
    user_id: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    role_id: "",
  },

  status: "loading",
  error: "",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.user = payload;
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
      state.error = payload;
    });
    builder.addCase(getUser.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      state.status = "done";
      console.log("slice " + JSON.stringify(payload));
      state.user = payload;
    });
    builder.addCase(getUser.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = payload;
    });
  },
});

export const userActions = userSlice.actions;
