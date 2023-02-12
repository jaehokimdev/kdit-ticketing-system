import { createSlice } from "@reduxjs/toolkit";
import { getAllTickets, getCategories } from "./ticketThunk";

const initialState = {
  tickets: [],
  isLoading: false,
  error: "",
  categories: [],
  searchTicketList: [],
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
  },
});

export const ticketActions = ticketSlice.actions;
