import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [],
  isLoading: false,
  error: "",
  categories: [],
  searchTicketList: [],
};

const ticketSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    getTicketsLoading: (state) => {
      state.isLoading = true;
    },
    getTicketsSuccess: (state, action) => {
      state.isLoading = false;
      state.tickets = action.payload;
      state.searchTicketList = action.payload;
      state.error = "";
    },
    getTicketsFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    getCategoriesLoading: (state) => {
      state.isLoading = true;
    },
    getCategoriesSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.categories = payload;
      state.error = "";
    },
    getCategoriesFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    searchTickets: (state, { payload }) => {
      state.searchTicketList = state.tickets.filter((row) => {
        if (!payload) return row;

        return row.subject.toLowerCase().includes(payload.toLowerCase());
      });
    },
  },
});

export const {
  getTicketsLoading,
  getTicketsSuccess,
  getTicketsFail,
  getCategoriesLoading,
  getCategoriesSuccess,
  getCategoriesFail,
  searchTickets,
} = ticketSlice.actions;

export default ticketSlice.reducer;
