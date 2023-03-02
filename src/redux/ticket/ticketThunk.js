import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../config/constants";
import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

export const getAllTickets = createAsyncThunk(
  "ticket/getAllTickets",
  async (_, { getState, dispatch, rejectedWithValue }) => {
    const response = await axios.get(baseUrl + "ticket/getAllTickets");

    return response.status === 200
      ? response
      : rejectedWithValue(response.error);
  }
);

export const getTicket = createAsyncThunk(
  "ticket/getTicket",
  async (tid, { getState, dispatch, rejectedWithValue }) => {
    const response = await axios.get(baseUrl + "ticket/getTicket", {
      params: { tid },
    });

    return response.status === 200
      ? response
      : rejectedWithValue(response.error);
  }
);

export const getComments = createAsyncThunk(
  "ticket/getComments",
  async (tid, { getState, dispatch, rejectedWithValue }) => {
    console.log(tid);
    const response = await axios.get(baseUrl + "ticket/getComments", {
      params: { tid },
    });

    return response.status === 200
      ? response
      : rejectedWithValue(response.error);
  }
);

export const getComment = createAsyncThunk(
  "ticket/getComment",
  async (cid, { getState, dispatch, rejectedWithValue }) => {
    const response = await axios.get(baseUrl + "ticket/getComment", {
      params: { cid },
    });

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
    const response = await axios.post(
      baseUrl + "ticket/newticket",
      frmData,
      config
    );
    return response.status === 200
      ? response
      : rejectedWithValue(response.error);
  }
);

export const addCommentByUser = createAsyncThunk(
  "ticket/addCommentByUser",
  async (data, { getState, dispatch, rejectedWithValue }) => {
    const response = await axios.post(
      baseUrl + "ticket/addCommentByUser",
      data,
      config
    );
    return response.status === 200
      ? response
      : rejectedWithValue(response.error);
  }
);

export const addCommentByAccount = createAsyncThunk(
  "ticket/addCommentByUser",
  async (data, { getState, dispatch, rejectedWithValue }) => {
    const response = await axios.post(
      baseUrl + "ticket/addCommentByAccount",
      data,
      config
    );
    return response.status === 200
      ? response
      : rejectedWithValue(response.error);
  }
);

export const addAgent = createAsyncThunk(
  "ticket/addAgent",
  async (data, { getState, dispatch, rejectedWithValue }) => {
    const response = await axios.post(
      baseUrl + "ticket/addAgent",
      data,
      config
    );
    return response.status === 200
      ? response
      : rejectedWithValue(response.error);
  }
);
