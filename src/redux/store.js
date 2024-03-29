import {
  bindActionCreators,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { ticketSlice } from "./ticket/ticketSlice";
import { userSlice } from "./user/userSlice";

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    tickets: ticketSlice.reducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;

export const userActions = bindActionCreators(
  userSlice.actions,
  store.dispatch
);

export const ticketActions = bindActionCreators(
  ticketSlice.actions,
  store.dispatch
);
