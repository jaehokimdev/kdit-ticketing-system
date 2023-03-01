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

export const getAllUserNames = createAsyncThunk(
  "user/getAllUserNames",
  async (_, { getState, dispatch, rejectedWithValue }) => {
    const response = await axios.get(baseUrl + "user/getAllUserNames");

    return response.status === 200
      ? response
      : rejectedWithValue(response.error);
  }
);

export const getAllAccounts = createAsyncThunk(
  "user/getAllAccounts",
  async (_, { getState, dispatch, rejectedWithValue }) => {
    const response = await axios.get(baseUrl + "user/getAllAccounts");

    return response.status === 200
      ? response
      : rejectedWithValue(response.error);
  }
);

export const getUser = createAsyncThunk(
  "user/getUser",
  async (email, { getState, dispatch, rejectedWithValue }) => {
    const response = await axios.get(baseUrl + "user/getuser", {
      params: { email },
    });
    return response.status === 200
      ? response
      : rejectedWithValue(response.error);
  }
);

export const getAccount = createAsyncThunk(
  "user/getAccount",
  async (email, { getState, dispatch, rejectedWithValue }) => {
    const response = await axios.get(baseUrl + "user/getaccount", {
      params: { email },
    });
    return response.status === 200
      ? response
      : rejectedWithValue(response.error);
  }
);
