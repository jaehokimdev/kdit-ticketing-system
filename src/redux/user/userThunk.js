import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../config/constants";
import axios from "axios";

export const getAllUsers = createAsyncThunk(
  "user/getAllUsers",
  async (_, { getState, dispatch, rejectedWithValue }) => {
    const response = await axios.get(baseUrl + "user/get");

    return response.status === 200
      ? response
      : rejectedWithValue(response.error);
  }
);
