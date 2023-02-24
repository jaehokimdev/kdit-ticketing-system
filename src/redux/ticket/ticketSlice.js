import { createSlice } from "@reduxjs/toolkit";
import {
  getAllTickets,
  getCategories,
  getStatus,
  getPriority,
  createNewTicket,
  getTicket,
  getComments,
} from "./ticketThunk";

const initialState = {
  tickets: [],
  ticket: [],
  comments: [],
  isLoading: false,
  error: "",
  categories: [],
  searchTicketList: [],
  ticketstatus: [],
  priority: [],
};

export const ticketSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    searchTickets: (state, { payload }) => {
      state.searchTicketList = state.tickets.filter((row) => {
        if (!payload) return row;

        return row.subject.toLowerCase().includes(payload.toLowerCase());
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllTickets.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getAllTickets.fulfilled, (state, { payload }) => {
      state.status = "done";
      state.tickets = payload.data;
      state.searchTicketList = payload.data;
    });
    builder.addCase(getAllTickets.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = payload;
    });
    builder.addCase(getTicket.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getTicket.fulfilled, (state, { payload }) => {
      state.status = "done";
      state.ticket = payload.data;
    });
    builder.addCase(getTicket.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = payload;
    });
    builder.addCase(getCategories.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getCategories.fulfilled, (state, { payload }) => {
      state.status = "done";
      state.categories = payload.data;
    });
    builder.addCase(getCategories.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = payload;
    });
    builder.addCase(getStatus.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getStatus.fulfilled, (state, { payload }) => {
      state.status = "done";
      state.ticketstatus = payload.data;
    });
    builder.addCase(getStatus.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = payload;
    });
    builder.addCase(getPriority.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getPriority.fulfilled, (state, { payload }) => {
      state.status = "done";
      state.priority = payload.data;
    });
    builder.addCase(getPriority.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = payload;
    });
    builder.addCase(getComments.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getComments.fulfilled, (state, { payload }) => {
      state.status = "done";
      state.comments = payload.data;
    });
    builder.addCase(getComments.rejected, (state, { payload }) => {
      state.status = "error";
      state.error = payload;
    });
    builder.addCase(createNewTicket.fulfilled, (state, { payload }) => {
      state.tickets.push(payload);
    });
  },
});

export const ticketActions = ticketSlice.actions;
