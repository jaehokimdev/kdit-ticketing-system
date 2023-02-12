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

export const getStatus = createAsyncThunk(
  "ticket/getStatus",
  async (_, { getState, dispatch, rejectedWithValue }) => {
    const response = await axios.get(baseUrl + "ticket/status");

    return response.status === 200
      ? response
      : rejectedWithValue(response.error);
  }
);

export const getPriority = createAsyncThunk(
  "ticket/getPriority",
  async (_, { getState, dispatch, rejectedWithValue }) => {
    const response = await axios.get(baseUrl + "ticket/priority");

    return response.status === 200
      ? response
      : rejectedWithValue(response.error);
  }
);

export const createNewTicket = createAsyncThunk(
  "ticket/createNewTicket",
  async (frmData, { getState, dispatch, rejectedWithValue }) => {
    const response = await axios.post(baseUrl + "ticket/newticket", frmData);
    console.log(frmData);
    return response.status === 200
      ? response
      : rejectedWithValue(response.error);
  }
);
