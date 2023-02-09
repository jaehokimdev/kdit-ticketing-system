import { getUsersPending, getUsersSuccess, getUsersFail } from "./userSlice";
import { getAllUsers } from "../api/userApi";

export const fetchAllusers = () => async (dispatch) => {
  dispatch(getUsersPending());
  try {
    const result = await getAllUsers();
    dispatch(getUsersSuccess(result.data));
  } catch (e) {
    dispatch(getUsersFail(e.message));
  }
};
