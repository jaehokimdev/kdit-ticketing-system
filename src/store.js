import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./pages/userSlice";
import ticketsReducer from "./pages/ticketSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    tickets: ticketsReducer,
  },
});

export default store;
