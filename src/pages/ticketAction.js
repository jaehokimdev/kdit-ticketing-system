import {
  getTicketsLoading,
  getTicketsSuccess,
  getTicketsFail,
  getCategoriesLoading,
  getCategoriesSuccess,
  getCategoriesFail,
  searchTickets,
} from "./ticketSlice";
import { getAllTickets } from "../api/ticketApi";
import { getCategories } from "../api/ticketApi";

export const fetchAlltickets = () => async (dispatch) => {
  dispatch(getTicketsLoading());
  try {
    const result = await getAllTickets();
    dispatch(getTicketsSuccess(result.data));
  } catch (e) {
    dispatch(getTicketsFail(e.message));
  }
};

export const fetchCategories = () => async (dispatch) => {
  dispatch(getCategoriesLoading());
  try {
    const result = await getCategories();
    dispatch(getCategoriesSuccess(result.data));
  } catch (e) {
    dispatch(getCategoriesFail(e.message));
  }
};

export const filterSearchTicket = (str) => (dispatch) => {
  dispatch(searchTickets(str));
};
