import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "./userThunk";

const initialState = {
  users: [],
  status: "loading",
  error: "",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setModalOpen(state, { payload }) {
      state.isModalOpen = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, (state, { payload }) => {
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
  },
});

export const userActions = userSlice.actions;
