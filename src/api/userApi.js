import axios from "axios";
import { baseUrl } from "../config/constants";

export const getAllUsersOld = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(baseUrl + "user/get");
      resolve(result);
    } catch (e) {
      reject(e);
    }
  });
};
