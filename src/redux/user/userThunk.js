import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../config/constants";
import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

export const getAllUsers = createAsyncThunk(
  "user/getAllUsers",
  async (_, { getState, dispatch, rejectedWithValue }) => {
    const response = await axios.get(baseUrl + "user/getAllUsers");

    return response.status === 200
      ? response
      : rejectedWithValue(response.error);
  }
);

export const getUser = createAsyncThunk(
  "user/getUser",
  async (frmData, { getState, dispatch, rejectedWithValue }) => {
    const response = await axios.get(
      baseUrl + "user/getuser",
      frmData.email,
      config
    );
    console.log("front " + JSON.stringify(response));
    console.log("email " + frmData.email);

    return response.status === 200
      ? response
      : rejectedWithValue(response.error);
  }
);
