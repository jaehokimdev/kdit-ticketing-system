import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../config/constants";
import axios from "axios";

export const getAllTickets = createAsyncThunk(
  "ticket/getAllTickets",
  async (_, { getState, dispatch, rejectedWithValue }) => {
    const response = await axios.get(baseUrl + "ticket/get");

    return response.status === 200
      ? response
      : rejectedWithValue(response.error);
  }
);

export const getTicketByStatus = createAsyncThunk(
  "ticket/getTicketByStatus",
  async (_, { getState, dispatch, rejectedWithValue }) => {
    const response = await axios.get(baseUrl + "ticket/get");

    return response.status === 200
      ? response
      : rejectedWithValue(response.error);
  }
);

export const getCategories = createAsyncThunk(
  "ticket/getCategories",
  async (_, { getState, dispatch, rejectedWithValue }) => {
    const response = await axios.get(baseUrl + "ticket/categories");

    return response.status === 200
      ? response
      : rejectedWithValue(response.error);
  }
);
