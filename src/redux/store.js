import { configureStore } from "@reduxjs/toolkit";
import { ticketSlice } from "./ticket/ticketSlice";
import { userSlice } from "./user/userSlice";

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    tickets: ticketSlice.reducer,
  },
});

export default store;
